"use client";

import { useState } from "react";

import { api } from "~/trpc/react";
import BaseButton from "./baseButton";

export default function Bases() {
  const { data } = api.base.getAll.useQuery();
  console.log("bases", data);
  //   const utils = api.useUtils();
  //   const [name, setName] = useState("");
  //   const createPost = api.post.create.useMutation({
  //     onSuccess: async () => {
  //       await utils.post.invalidate();
  //       setName("");
  //     },
  //   });

  return (
    <div className="w-full bg-[#f9fafb] p-8">
      <p className="mb-8 text-2xl font-bold">Home</p>
      <div className="flex flex-wrap gap-3">
        {data?.map((base) => (
          <BaseButton key={base.id} id={base.id} name={base.name} />
        ))}
      </div>
    </div>
  );
}
