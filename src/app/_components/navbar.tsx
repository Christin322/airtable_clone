import Image from "next/image";
import airtableIcon from "../../../public/airtable_icon.png";
import {
  ChevronDownIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
export default function Navbar() {
  return (
    <div className="width-full flex h-fit flex-row items-center justify-between bg-[#dfdbfa] px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        {/* <div className='flex flex-row justify-center items-center gap-4'> */}
        <Image
          className="h-[20px] w-[24px]"
          src={airtableIcon}
          alt="airtable icon"
        ></Image>
        {/* TODO: replace with name */}
        <div className="flex flex-row items-center">
          <p className="text-md mr-1 font-bold">Untitled Base</p>
          <ChevronDownIcon className="size-4 text-gray-900" />
        </div>
        {/* </div> */}
        <ul className="flex flex-row gap-2 text-xs text-gray-700">
          <li className="inset-shadow-sm rounded-full bg-[#ccc3ee] px-4 py-[0.5rem] text-black">
            <a href="/">Data</a>
          </li>
          <li className="rounded-full px-4 py-[0.5rem] hover:bg-[#d1cbf2]">
            <a href="/">Automations</a>
          </li>

          <li className="rounded-full px-4 py-[0.5rem] hover:bg-[#d1cbf2]">
            <a href="/">Interfaces</a>
          </li>
          <div className="mb-1 mt-1 border-l-[1px] border-gray-900"></div>
          <li className="rounded-full px-4 py-[0.5rem] hover:bg-[#d1cbf2]">
            <a href="/">Forms</a>
          </li>
        </ul>
      </div>
      <ul className="flex flex-row gap-4 text-xs text-gray-700">
        <div className="flex flex-row">
          <li className="rounded-full px-4 py-[0.5rem] hover:bg-[#d1cbf2]">
            <ClockIcon className="size-4 text-gray-900" />
          </li>
          <li className="flex flex-row rounded-full px-4 py-[0.5rem] hover:bg-[#d1cbf2]">
            <QuestionMarkCircleIcon className="mr-1 size-4 text-gray-900" />
            <p>Help</p>
          </li>
        </div>
        <li className="flex flex-row rounded-full bg-white px-4 py-[0.5rem] text-[#5c3aa8] shadow-sm">
          <UsersIcon className="mr-1 size-4 text-[#5c3aa8] text-gray-900" />
          <p>Share</p>
        </li>
        <li className="flex flex-row items-center justify-center rounded-full bg-white px-[0.5rem] py-[0.5rem] text-[#5c3aa8] shadow-sm">
          <BellIcon className="size-4 text-[#5c3aa8] text-gray-900" />
        </li>
        <li className="flex w-8 flex-row items-center justify-center rounded-full border-[1px] border-solid border-white bg-blue-300 text-[#5c3aa8] shadow-sm">
          <p>C</p>
        </li>
      </ul>
    </div>
  );
}
