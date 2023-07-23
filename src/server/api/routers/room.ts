import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
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
        })

});