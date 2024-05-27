import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";
export const tagRouter = createTRPCRouter({
  getOne: protectedProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.prisma.tag.findUnique({ where: { id: input.id } });

  }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.tag.findMany({});

  }),
  addMany: protectedProcedure
    .input(z.object({ tagIds: z.array(z.string()), roomId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.room.update({
        where: { id: input.roomId },
        data: {
          tags: {
            connect: input.tagIds.map((tagId) => ({ id: tagId })),
          },
        },
      });
    }),

  removeOne: protectedProcedure.input(z.object({ tagId: z.string(), roomId: z.string() })).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.room.update({
      where: { id: input.roomId },
      data: {
        tags: {
          disconnect: [{ id: input.tagId }],
        },
      },
    });

  }),

});