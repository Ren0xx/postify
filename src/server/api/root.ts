import { roomRouter } from "~/server/api/routers/room";
import { messageRouter } from "~/server/api/routers/message";
import { userRouter } from "~/server/api/routers/user";
import { tagRouter } from "~/server/api/routers/tag";

import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  room: roomRouter,
  message: messageRouter,
  user: userRouter,
  tag: tagRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
