import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { registrations } from "~/server/db/schema";

export const registrationRouter = createTRPCRouter({


  create: publicProcedure
    .input(z.object({ name: z.string().min(1), email: z.string().email(), reason: z.string().min(1)}))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.insert(registrations).values({
        name: input.name,
        email: input.email.toLowerCase(),
        reason: input.reason
      }).returning();
    }),


});
