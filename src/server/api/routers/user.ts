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

    getLoggedUserFriends: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findUnique({
            where: { id: ctx.session.user.id },
            select: { User_A: true }
        });
    }),
    getUserFriends: protectedProcedure.input(z.object({ id: z.string() })).query(({ input, ctx }) => {
        return ctx.prisma.user.findUnique({
            where: { id: input.id },
            select: { User_A: true }
        });
    }),
    getUser: protectedProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.user.findUnique({
            where: { id: input.id },

        });
    }),
    getUserRooms: protectedProcedure.input(z.object({ id: z.string() })).query(({ input, ctx }) => {
        return ctx.prisma.user.findUnique({
            where: { id: input.id },
            select: { roomsOwned: { include: { tags: true } } }
        });
    }),
});