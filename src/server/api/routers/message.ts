import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
export const messageRouter = createTRPCRouter({
  createOne: protectedProcedure
    .input(z.object({ content: z.string(), roomId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.message.create({
        data: {
          content: input.content,
          roomId: input.roomId,
          creatorId: ctx.session.user.id
        },
      });
    }),
  getOne: protectedProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.prisma.message.findUnique({ where: { id: input.id }, include: { room: true, creator: true } });

  }),
  deleteOne: protectedProcedure.input(z.object({ id: z.string() })).mutation(async ({ ctx, input }) => {

    return ctx.prisma.message.delete({ where: { id: input.id } });
  }),
});