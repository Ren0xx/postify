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

});