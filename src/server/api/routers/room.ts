import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
} from "@/server/api/trpc";

export const roomRouter = createTRPCRouter({
    createPublic: protectedProcedure
        .input(z.object({ name: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.room.create({
                data: {
                    name: input.name,
                    ownerId: ctx.session.user.id,
                },
            });
        }),
    createPrivate: protectedProcedure
        .input(
            z.object({
                name: z.string(),
                password: z.string(),
                isPublic: z.boolean(),
            })
        )
        .mutation(async ({ ctx, input }) => {

            return ctx.prisma.room.create({
                data: {
                    name: input.name,
                    ownerId: ctx.session.user.id,
                },
            });

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
        .input(z.object({ count: z.number() }))
        .query(async ({ ctx, input }) => {
            const rooms = await ctx.prisma.room.findMany({
                where: {
                    isPublic: true,
                },
                take: input.count,
                orderBy: [
                    {
                        allowedUsers: {
                            _count: "desc",
                        },
                    },
                ],
                include: {
                    tags: true,
                    allowedUsers: true,
                },
            });
            return rooms;
        }),
    getRoomsPaginated: protectedProcedure
        .input(z.object({ page: z.number().gte(1) }))
        .query(async ({ ctx, input }) => {
            const rooms = await ctx.prisma.room.findMany({
                skip: (input.page - 1) * 10,
                take: 10,
                include: {
                    tags: true,
                },
            });
            return rooms;
        }),

});