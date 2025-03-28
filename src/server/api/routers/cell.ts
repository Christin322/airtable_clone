import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const cellRouter = createTRPCRouter({
  updateCellData: protectedProcedure
    .input(z.object({ id: z.string(), value: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { id, value } = input;
      const updatedCell = await ctx.db.cellData.update({
        where: { id: id },
        data: { value: value },
      });

      return updatedCell;
    }),
});
