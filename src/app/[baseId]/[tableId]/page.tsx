import Navbar from "../../_components/navbar";
import Table from "../../_components/table";
import TableNav from "../../_components/tableNav";
import TableViews from "../../_components/tableViews";
import { api } from "~/trpc/react";
// import { useParams } from "next/navigation";

export default async function TablePage() {
  // const params = useParams();
  // const baseId = Array.isArray(params.baseId)
  //   ? params.baseId[0]
  //   : params.baseId;

  // if (!baseId) {
  //   return <div>Error: Base ID not found.</div>;
  // }

  // const { data } = api.table.getTable.useQuery({
  //   tableId: baseId,
  // });

  // console.log(data);
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar></Navbar>
      <TableNav></TableNav>
      <div className="flex grow">
        <TableViews></TableViews>
        <Table></Table>
      </div>
    </div>
  );
}
