"use client";

import {
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  TableCellsIcon,
  ChevronDownIcon,
  PlusIcon,
  CalendarIcon,
  Squares2X2Icon,
  ViewColumnsIcon,
  PresentationChartLineIcon,
  ListBulletIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Form from "next/form";
import { useState } from "react";

export default function TableViews() {
  const [openCreateView, setOpenCreateView] = useState(true);

  return (
    <div className="flex h-full w-1/6 flex-col justify-between gap-2 border-r-[1px] p-3">
      {/* search and settings */}
      <div>
        <div className="flex justify-between p-2">
          <div className="flex gap-2">
            <MagnifyingGlassIcon className="size-4" />
            {/* TODO: fix input */}
            <p className="text-xs">Find a view</p>
          </div>
          <Cog6ToothIcon className="size-4" />
        </div>
        <div className="border-b-[1px]" />
        {/* list of current views */}
        <ul>
          <li className="flex gap-2 p-2">
            <TableCellsIcon className="size-4" />
            {/* todo replace with view name */}
            <p className="text-xs">Grid View</p>
          </li>
        </ul>
      </div>
      {/* create views */}
      <div>
        <div className="border-b-[1px]" />

        <div
          className="flex items-center justify-between p-2"
          onClick={() => {
            setOpenCreateView((prev) => !prev);
          }}
        >
          <p className="text-sm font-medium">Create...</p>
          {openCreateView && <ChevronDownIcon className="size-4" />}
          {!openCreateView && <ChevronUpIcon className="size-4" />}
        </div>
        {openCreateView && (
          <ul className="flex flex-col">
            <li className="flex items-center justify-between rounded-md p-2 hover:bg-[#f2f2f2]">
              <div className="flex gap-2">
                <TableCellsIcon className="size-4 text-[#4771d9]" />
                <p className="text-xs font-medium">Grid</p>
              </div>
              <PlusIcon className="size-4" />
            </li>
            <li className="flex items-center justify-between rounded-md p-2 hover:bg-[#f2f2f2]">
              <div className="flex gap-2">
                <CalendarIcon className="size-4 text-[#bd5021]" />
                <p className="text-xs font-medium">Calendar</p>
              </div>
              <PlusIcon className="size-4" />
            </li>
            <li className="flex items-center justify-between rounded-md p-2 hover:bg-[#f2f2f2]">
              <div className="flex gap-2">
                <Squares2X2Icon className="size-4 text-[#7547e6]" />
                <p className="text-xs font-medium">Gallery</p>
              </div>
              <PlusIcon className="size-4" />
            </li>
            <li className="flex items-center justify-between rounded-md p-2 hover:bg-[#f2f2f2]">
              <div className="flex gap-2">
                <ViewColumnsIcon className="size-4 text-[#45862a]" />
                <p className="text-xs font-medium">Kanban</p>
              </div>
              <PlusIcon className="size-4" />
            </li>
            <li className="flex items-center justify-between rounded-md p-2 hover:bg-[#f2f2f2]">
              <div className="flex gap-2">
                <PresentationChartLineIcon className="size-4 text-[#c13040]" />
                <p className="text-xs font-medium">Timeline</p>
              </div>
              <PlusIcon className="size-4" />
            </li>
            <li className="flex items-center justify-between rounded-md p-2 hover:bg-[#f2f2f2]">
              <div className="flex gap-2">
                <ListBulletIcon className="size-4 text-[#4160ac]" />
                <p className="text-xs font-medium">List</p>
              </div>
              <PlusIcon className="size-4" />
            </li>
            <li className="flex items-center justify-between rounded-md p-2 hover:bg-[#f2f2f2]">
              <div className="flex gap-2">
                <ChartBarIcon className="size-4 text-[#437d78]" />
                <p className="text-xs font-medium">Gantt</p>
              </div>
              <PlusIcon className="size-4" />
            </li>
            <li className="flex items-center justify-between rounded-md p-2 hover:bg-[#f2f2f2]">
              <div className="flex gap-2">
                <p className="text-xs font-medium">New section</p>
              </div>
              <PlusIcon className="size-4" />
            </li>
            <div className="mb-1 mt-1 border-b-[1px]" />
            <li className="flex items-center justify-between rounded-md p-2 hover:bg-[#f2f2f2]">
              <div className="flex gap-2">
                <DocumentTextIcon className="size-4 text-[#c745a9]" />
                <p className="text-xs font-medium">Form</p>
              </div>
              <PlusIcon className="size-4" />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
