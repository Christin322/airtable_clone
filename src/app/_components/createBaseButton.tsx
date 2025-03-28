"use client";
import { api } from "~/trpc/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { baseRouter } from "~/server/api/routers/base";

export default function CreateBaseButton() {
  const utils = api.useUtils();
  const router = useRouter();

  const create = api.base.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
    },
  });

  // const { data } = api.base.getAll.useQuery();

  // console.log("bases", data);

  const createBase = async () => {
    const name = "Untitled Base";

    try {
      const { newBase, defaultTable } = await create.mutateAsync({ name });
      console.log("created base:", newBase);
      router.push(`${newBase.id}/${defaultTable.id}`);
    } catch (error) {
      console.error("Error creating base:", error);
    }
  };

  return (
    <div>
      <div
        className="flex w-full flex-row items-center justify-center rounded-md bg-[#4570d9] p-2"
        onClick={createBase}
      >
        <PlusIcon className="mr-2 size-4 text-white" />
        <p className="text-xs font-medium text-white">Create</p>
      </div>
    </div>
  );
}
