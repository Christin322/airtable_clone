import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const baseRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { name } = input;

      // create  base
      const newBase = await ctx.db.base.create({
        data: {
          name,
          createdBy: ctx.session.user.id,
        },
      });

      // add default table to base
      const defaultTable = await ctx.db.table.create({
        data: {
          name: "Table 1",
          baseId: newBase.id,
        },
      });

      const defaultColumns = await ctx.db.field.createMany({
        data: [
          { name: "Name", tableId: defaultTable.id },
          { name: "Notes", tableId: defaultTable.id },
          { name: "Assignee", tableId: defaultTable.id },
          { name: "Status", tableId: defaultTable.id },
        ],
      });

      console.log(defaultColumns);

      // const defaultRows = await ctx.db.record.createMany({
      //   data: [
      //     { tableId: defaultTable.id },
      //     {
      //       tableId: defaultTable.id,
      //       fieldId: defaultColumns,
      //       value: ""
      //     },
      //     { tableId: defaultTable.id },
      //   ],
      // });

      // TODO: add more returns if needed
      return { newBase, defaultTable };
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const allBases = await ctx.db.base.findMany({
      where: { createdBy: ctx.session.user.id },
    });
    return allBases ?? null;
  }),
});
