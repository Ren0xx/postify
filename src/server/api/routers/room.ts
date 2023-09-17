/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
} from "@/server/api/trpc";
import bcrypt from "bcrypt";

export const roomRouter = createTRPCRouter({
    createRoom: protectedProcedure
        .input(z.object({
            name: z.string(),
            password: z.string().optional(),
            tagsIds: z.array(z.string())
        }))
        .mutation(async ({ ctx, input }) => {
            const { name, password, tagsIds } = input;

            let hashedPassword: string | null = null;

            if (typeof password === "string") {
                hashedPassword = await bcrypt.hash(password, 10);
            }

            const room = await ctx.prisma.room.create({
                data: {
                    name,
                    ownerId: ctx.session.user.id,
                    password: hashedPassword,
                    isPublic: password ? false : true,
                    tags: {
                        connect: tagsIds.map(id => ({ id: id }))
                    }
                }
            });

            return room;
        }),
    nameAlreadyTaken: protectedProcedure
        .input(
            z.object({
                name: z.string()
            })
        )
        .query(async ({ ctx, input }) => {
            return ctx.prisma.room.findFirst({
                where: { name: input.name }
            });
        }),

    getOne: protectedProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.room.findUnique({ where: { id: input.id }, include: { owner: true, tags: true, allowedUsers: true, messages: { include: { creator: true } } } });

    }),

    passwordMatches: protectedProcedure.input(z.object({ password: z.string(), roomPassword: z.string() })).query(async ({ input }) => {
        const { password, roomPassword } = input;

        const isPasswordValid = await bcrypt.compare(password, roomPassword);
        if (!isPasswordValid) {
            return false;
        }
        return true;
    }),
    addToAllowedUsers: protectedProcedure.input(z.object({ roomId: z.string() })).mutation(async ({ ctx, input }) => {
        return ctx.prisma.room.update({
            where: { id: input.roomId },
            data: { allowedUsers: { connect: { id: ctx.session.user.id } } },
        });

    }),
    removeOne: protectedProcedure.input(z.object({ id: z.string() })).mutation(async ({ ctx, input }) => {
        return ctx.prisma.room.delete({ where: { id: input.id } });
    }),
    getTopRooms: protectedProcedure
        .input(z.object({ numberOfRooms: z.number() }))
        .query(async ({ ctx, input }) => {

            const rooms = await ctx.prisma.room.findMany({
                where: {
                    isPublic: true,
                },
                take: input.numberOfRooms,
                include: {
                    tags: true,
                },
                orderBy: {
                    tags: {
                        _count: "desc",
                    }
                },
            });

            return rooms;
        }),
    getRoomsPaginated: protectedProcedure
        .input(z.object({ page: z.number().gte(1), tags: z.array(z.string()).optional() }))
        .query(async ({ ctx, input }) => {

            const perPage = 10;
            const offset = (input.page - 1) * perPage;

            let where = {};
            if (input.tags && input.tags.length > 0) {
                where = {
                    tags: {
                        some: {
                            name: {
                                in: input.tags,
                            },
                        },
                    },
                };
            }

            const totalRooms = await ctx.prisma.room.count({
                where,
            });

            const rooms = await ctx.prisma.room.findMany({
                skip: offset,
                take: perPage,
                where,
                include: {
                    tags: true,
                },
                orderBy: {
                    tags: {
                        _count: 'desc',

                    }
                }
            });

            const totalPages = Math.ceil(totalRooms / perPage);

            return { rooms, totalPages };
        }),
});