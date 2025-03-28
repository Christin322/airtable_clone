import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const tableRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // table name would be table + 1
      const { name } = input;

      // create  table
      const newTable = await ctx.db.base.create({
        data: {
          name,
          createdBy: ctx.session.user.id,
        },
      });

      const defaultColumns = await ctx.db.field.createMany({
        data: [
          { name: "Name", tableId: newTable.id },
          { name: "Notes", tableId: newTable.id },
          { name: "Assignee", tableId: newTable.id },
          { name: "Status", tableId: newTable.id },
        ],
      });

      const defaultRows = await ctx.db.record.createMany({
        data: [
          { tableId: newTable.id },
          { tableId: newTable.id },
          { tableId: newTable.id },
        ],
      });

      // TODO: add more returns if needed
      return newTable;
    }),

  // TODO: fix this, query for an array
  getAll: protectedProcedure
    .input(z.object({ baseId: z.string() }))
    .query(async ({ ctx, input }) => {
      const { baseId } = input;
      const allTables = await ctx.db.table.findMany({
        where: { baseId: input.baseId },
      });
      return allTables ?? null;
    }),

  // get the first table to load the base up (first table)
  getDefaultTable: protectedProcedure
    .input(z.object({ baseId: z.string() }))
    .query(async ({ input, ctx }) => {
      const { baseId } = input;
      const tableId = await ctx.db.table.findFirst({
        select: {
          id: true,
        },
        where: { baseId: baseId },
      });

      return tableId;
    }),

  // get specific table
  getTable: protectedProcedure
    .input(z.object({ tableId: z.string() }))
    .query(async ({ input, ctx }) => {
      const { tableId } = input;
      // const table = await ctx.db.table.findUnique({
      //   where: { id: tableId },
      //   include: {
      //     fields: true,
      //     records: {
      //       select: {
      //         id: true,
      //         fieldId: true,
      //         value: true,
      //       },
      //     },
      //   },
      const table = await ctx.db.$queryRaw`SELECT Record.id AS row_id,
      cellData.value AS cell_value,
      field.name AS column 
      FROM "Record" record 
      JOIN "CellData" ON "CellData".recordId = "Record".id
      JOIN  "Field" field ON field.id = "CellData".fieldId
      WHERE record.tableId = ${tableId}`;
      console.log("query", table);

      // each field record (row and data) has a field
      // tanstack takes in rows togehter

      // rn in my schema u cant tell what belongs in a row together

      // get the columns and put it into a dict
      // {columndId : name}

      // when u loop thru each row
      // the cellData has a correspoding fieldID,
      // just grab that and add it to the dict

      // if each record has the same Id and has diff
      // fieldID then thats a row but idk if ids are meant
      // to be different
      // or just have records have multiple cellData and no fieldID
      return table ?? null;
    }),

  //probably need to delete shit as well
});
