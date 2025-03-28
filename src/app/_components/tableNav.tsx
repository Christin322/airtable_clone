import Image from 'next/image'
import airtableIcon from '../../../../public/airtable_icon.png';
import { ChevronDownIcon, PlusIcon, Bars3Icon, TableCellsIcon, 
    UserGroupIcon, EyeSlashIcon, FunnelIcon, 
    RectangleStackIcon, ArrowsUpDownIcon, PaintBrushIcon, 
    BarsArrowDownIcon, ArrowTopRightOnSquareIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
export default function TableNav() {
    
    return (
        <div>

            {/* // background div */}
      
        <div className='w-full h-8 bg-[#dfdbfa] flex flex-row jsutify-content gap-2'>
            {/* table tabs */}
            <div className='flex-1 flex flex-row items-center bg-[#d1cbf2] rounded-tr-md px-4'>
                {/* have a list of table tabs */}
                <ul className='flex flex-row items-center'>
                    <li className='flex flex-row px-4 h-8 items-center bg-white rounded-t-sm '>
                        <p className='text-xs font-medium mr-1'>Table 1</p>
                        <ChevronDownIcon className="size-4" />
                    </li>
                    <div className='px-4'>
                        <ChevronDownIcon className="size-4"/>
                    </div>
                    <div className="border-l-[1px] border-gray-400 h-4"></div>
                    <li className='flex flex-row px-4 h-8 items-center'>
                        <PlusIcon className="size-4 text-gray-700 mr-1" />
                        <p className='text-xs text-gray-700'>Add or import</p>
                    </li>
                </ul>

            </div>
            {/* extensions + tools */}
            <div className='w-fit bg-[#d1cbf2] text-xs text-gray-900 flex flex-row items-center px-4 gap-6 rounded-tl-md'>
                <p>Extensions</p>
                <div className='flex flex-row'>
                    <p className='mr-1'>Tools</p>
                    <ChevronDownIcon className="size-4 text-gray-900" />
                </div>
            </div>
        </div>
        {/* tabs toolkit*/}
        <div className='h-10 bg-white border-b-[1px] px-4 flex flex-row gap-2 justify-between items-center'>
            <ul className='flex flex-row items-center gap-2 h-6'>
            <li className='flex flex-row px-2 gap-2 items-center h-full hover:bg-[#f2f2f2] rounded-sm'>
                <Bars3Icon className="size-4" />
                <p className='text-xs font-medium'>Views</p>
            </li>
            <div className="border-l-[1px] border-gray-400 h-4 mx-2"></div>
            <li className='flex flex-row px-2 items-center gap-2 h-full hover:bg-[#f2f2f2] rounded-sm'>
                <TableCellsIcon className="size-4 text-[#4570d9]" />
                <p className='text-xs font-medium'>Grid View</p>
                <UserGroupIcon className="size-4" />
                <ChevronDownIcon className="size-4" />
            </li>
            <li className='flex flex-row px-2 gap-2 items-center h-full hover:bg-[#f2f2f2] rounded-sm'>
                <EyeSlashIcon className="size-4" />
                <p className='text-xs'>Hide fields</p>
            </li>
            <li className='flex flex-row px-2 gap-2 items-center h-full hover:bg-[#f2f2f2] rounded-sm'>
                <FunnelIcon className="size-4" />
                <p className='text-xs'>Filter</p>
            </li>
            <li className='flex flex-row px-2 gap-2 items-center h-full hover:bg-[#f2f2f2] rounded-sm'>
                <RectangleStackIcon className="size-4" />
                <p className='text-xs'>Group</p>
            </li>
            <li className='flex flex-row px-2 gap-2 items-center h-full hover:bg-[#f2f2f2] rounded-sm'>
                <ArrowsUpDownIcon className="size-4" />
                <p className='text-xs'>Sort</p>
            </li>
            <li className='flex flex-row px-2 gap-2 items-center h-full hover:bg-[#f2f2f2] rounded-sm'>
                <PaintBrushIcon className="size-4" />
                <p className='text-xs'>Colour</p>
            </li>
            <li className='flex flex-row px-2 gap-2 items-center h-full hover:bg-[#f2f2f2] rounded-sm'>
                <BarsArrowDownIcon className="size-4" />
                <p className='text-xs'>Row Height</p>
            </li>
            <li className='flex flex-row px-2 gap-2 items-center h-full hover:bg-[#f2f2f2] rounded-sm'>
                <ArrowTopRightOnSquareIcon className="size-4" />
                <p className='text-xs'>Share and sync</p>
            </li>
            </ul>
            <MagnifyingGlassIcon className="size-4" />
        </div>
        </div>
    );
}