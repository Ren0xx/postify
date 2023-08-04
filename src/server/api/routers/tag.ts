import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
export const tagRouter = createTRPCRouter({
  getOne: protectedProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.prisma.tag.findUnique({ where: { id: input.id } });

  }),

  removeOne: protectedProcedure.input(z.object({ id: z.string() })).mutation(async ({ ctx, input }) => {
    const tag = await ctx.prisma.tag.findUnique({ where: { id: input.id }, include: { rooms: true } });
    if (!tag) return null;
    await ctx.prisma.tag.update({
      where: { id: input.id },
      data: { rooms: { disconnect: tag.rooms.map((room) => ({ id: room.id })) } },
    });

    return ctx.prisma.tag.delete({ where: { id: input.id } });
  })
});