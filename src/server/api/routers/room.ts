import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const roomRouter = createTRPCRouter({
    createPublic: protectedProcedure
        .input(z.object({ name: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.room.create({
                data: {
                    name: input.name,
                    ownerId: ctx.session.user.id
                }
            });
        }),
    createPrivate: protectedProcedure
        .input(z.object({ name: z.string(), password: z.string(), isPublic: z.boolean() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.room.create({
                data: {
                    name: input.name,
                    password: input.password,
                    isPublic: input.isPublic,
                    ownerId: ctx.session.user.id,
                }
            });
        }),
});

