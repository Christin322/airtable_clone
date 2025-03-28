"use client";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export default function BaseButton({ id, name }: { id: string; name: string }) {
  const utils = api.useUtils();
  const router = useRouter();
  // const create = api.base.create.useMutation({
  //   onSuccess: async () => {
  //     await utils.post.invalidate();
  //   },
  // });

  // const { data: baseData } = api.base.getAll.useQuery();
  const { data } = api.table.getDefaultTable.useQuery({ baseId: id });
  console.log("table", data);

  // const createBase = async () => {
  //   const name = "demo 2 base";

  //   try {
  //     const newBase = await create.mutateAsync({ name });
  //     console.log("created base:", newBase);
  //     return newBase;
  //   } catch (error) {
  //     console.error("Error creating base:", error);
  //   }
  // };

  return (
    <div
      className="flex w-2/5 items-center gap-2 rounded-md bg-white p-4 shadow-sm hover:shadow-lg"
      onClick={() => router.push(`/${id}/${data?.id}`)}
    >
      <div className="mr-2 flex h-[56px] w-[56px] items-center justify-center rounded-lg bg-[#dfdbfa]">
        {/* TODO: fix text size */}
        <p className="font-xl">{name.slice(0, 2)}</p>
      </div>
      <div className="items-around flex flex-col">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs">Base</p>
      </div>
    </div>
  );
}
