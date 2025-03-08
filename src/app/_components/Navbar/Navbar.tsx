import Image from 'next/image'
import airtableIcon from '../../../../public/airtable_icon.png';
import { ChevronDownIcon, ClockIcon, QuestionMarkCircleIcon, UsersIcon, BellIcon } from '@heroicons/react/24/outline'
export default function Navbar() {
    
    return (
        <div className="width-full bg-[#dfdbfa] flex flex-row py-4 px-6 h-fit items-center justify-between">
            <div className='flex flex-row items-center gap-4'>
            {/* <div className='flex flex-row justify-center items-center gap-4'> */}
                <Image className="w-[24px] h-[20px]" src={airtableIcon} alt="airtable icon"></Image>
                {/* TODO: replace with name */}
                <div className='flex flex-row items-center'>
                    <p className='text-md font-bold mr-1'>Untitled Base</p> 
                    <ChevronDownIcon className="size-4 text-gray-900" />
                </div>
            {/* </div> */}
                <ul className="flex flex-row text-gray-700 text-xs gap-2">
                    <li className="bg-[#ccc3ee] inset-shadow-sm text-black rounded-full px-4 py-[0.5rem]"><a href="/">Data</a></li>
                    <li className="hover:bg-[#d1cbf2] rounded-full px-4 py-[0.5rem]"><a href="/">Automations</a></li>

                    <li className="hover:bg-[#d1cbf2] rounded-full px-4 py-[0.5rem]"><a href="/">Interfaces</a></li>
                    <div className="border-l-[1px] border-gray-900 mt-1 mb-1"></div>
                    <li className="hover:bg-[#d1cbf2] rounded-full px-4 py-[0.5rem]"><a href="/">Forms</a></li>

                </ul>
            </div>
            <ul className="flex flex-row text-gray-700 text-xs gap-4">
                <div className='flex flex-row'>
                    <li className="hover:bg-[#d1cbf2] rounded-full px-4 py-[0.5rem]"><ClockIcon className="size-4 text-gray-900" /></li>
                    <li className="hover:bg-[#d1cbf2] rounded-full px-4 py-[0.5rem] flex flex-row">
                        <QuestionMarkCircleIcon className="size-4 text-gray-900 mr-1" />
                        <p>Help</p>
                    </li>
                </div>
                <li className="rounded-full px-4 py-[0.5rem] flex flex-row text-[#5c3aa8] bg-white shadow-sm">
                    <UsersIcon className="size-4 text-gray-900 mr-1 text-[#5c3aa8]" />
                    <p>Share</p>
                </li>
                <li className="rounded-full px-[0.5rem] py-[0.5rem] justify-center items-center flex flex-row text-[#5c3aa8] bg-white shadow-sm">
                    <BellIcon className="size-4 text-gray-900 text-[#5c3aa8]" />
                </li>
                <li className="rounded-full w-8 justify-center items-center flex flex-row text-[#5c3aa8] bg-blue-300 shadow-sm border-solid border-white border-[1px]  ">
                    <p>C</p>
                </li>
            </ul>
        </div>
    );
}