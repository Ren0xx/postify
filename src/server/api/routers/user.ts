import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "@/server/api/trpc";
export const userRouter = createTRPCRouter({
    getOne: protectedProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.user.findUnique({
            where: { id: input.id },

            include: {
                User_A: true,
                roomsOwned: true,
            }
        });
    }),
    addFriend: protectedProcedure.input(z.object({ id: z.string() })).mutation(({ ctx, input }) => {
        return ctx.prisma.user.update({
            where: { id: ctx.session.user.id },
            data: {
                User_A: {
                    connect: {
                        id: input.id
                    },
                },
            },
        });
    }),
    removeFriend: protectedProcedure.input(z.object({ id: z.string() })).mutation(({ ctx, input }) => {
        return ctx.prisma.user.update({
            where: { id: ctx.session.user.id },
            data: {
                User_A: {
                    disconnect: {
                        id: input.id
                    },
                }
            },
        });
    }),
});