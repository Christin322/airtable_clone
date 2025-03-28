"use client";

import { useReactTable } from "@tanstack/react-table";
import { useParams } from "next/navigation";

import { api } from "~/trpc/react";

export default function Table() {
  // get table id
  const params = useParams<{ baseId: string; tableId: string }>();
  const { data } = api.table.getTable.useQuery({ tableId: params.tableId });
  console.log("table in table", data);
  //   const table = useReactTable(
  //     data:
  //   );
  return <div></div>;
}
