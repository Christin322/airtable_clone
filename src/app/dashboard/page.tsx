import {
  ArrowUpTrayIcon,
  Bars3Icon,
  BellIcon,
  BookOpenIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import CreateBaseButton from "../_components/createBaseButton";
import Bases from "../_components/bases";

export default async function Dashboard() {
  return (
    <div className="h-screen w-screen">
      {/* navbar */}
      <div className="absolute flex w-full justify-between border-[1px] bg-white p-4 shadow-sm">
        <div className="flex items-center">
          <Bars3Icon className="mr-4 size-4"></Bars3Icon>
          <p className="text-xl">Airtable</p>
        </div>
        <div className="flex w-1/5 items-center justify-between rounded-full border-[1px] px-4 shadow-sm">
          <div className="flex items-center">
            <MagnifyingGlassIcon className="mr-2 size-4"></MagnifyingGlassIcon>
            <p className="text-xs">Search...</p>
          </div>
          <p className="text-xs">ctrl K</p>
        </div>
        <ul className="flex flex-row gap-4 text-xs text-gray-700">
          <li className="flex flex-row rounded-full px-4 py-[0.5rem] hover:bg-[#d1cbf2]">
            <QuestionMarkCircleIcon className="mr-1 size-4 text-gray-900" />
          </li>
          <li className="flex flex-row items-center justify-center rounded-full bg-white px-[0.5rem] py-[0.5rem] text-[#5c3aa8] shadow-sm">
            <BellIcon className="size-4 text-[#5c3aa8] text-gray-900" />
          </li>
          <li className="flex w-8 flex-row items-center justify-center rounded-full border-[1px] border-solid border-white bg-blue-300 text-[#5c3aa8] shadow-sm">
            <p>C</p>
          </li>
        </ul>
      </div>
      {/* side bar + bases */}
      <div className="flex h-full pt-16">
        {/* sidebar */}
        <div className="flex h-full w-1/4 flex-col justify-between p-3">
          <div>
            <div className="flex items-center justify-between p-2">
              <p className="text-sm font-medium">Home</p>
              <ChevronRightIcon className="size-4"></ChevronRightIcon>
            </div>
            <div className="flex items-center justify-between p-2">
              <p className="text-sm font-medium">All workspaces</p>
              <div className="flex">
                <PlusIcon className="mr-4 size-4"></PlusIcon>
                <ChevronRightIcon className="size-4"></ChevronRightIcon>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="mx-4 border-b"></div>
            <div>
              <div className="flex p-2">
                <BookOpenIcon className="mr-2 size-4" />
                <p className="text-xs">Templates and apps</p>
              </div>
              <div className="flex p-2">
                <ShoppingBagIcon className="mr-2 size-4" />
                <p className="text-xs">Marketplace</p>
              </div>
              <div className="flex p-2">
                <ArrowUpTrayIcon className="mr-2 size-4" />
                <p className="text-xs">Import</p>
              </div>
            </div>
            <CreateBaseButton></CreateBaseButton>
          </div>
        </div>

        <Bases></Bases>
      </div>
    </div>
  );
}
