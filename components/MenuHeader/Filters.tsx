import {
  COLUMN_ICON,
  FILTER_ICON,
  ROW_ICON,
  SORT_ICON,
} from "@/constants/assets";
import Image from "next/image";

const Filters = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-3 text-[14px]">
      <div className="flex items-center gap-x-3 hover:bg-gray-100 border border-transparent hover:border-neutral-200 px-3 py-2 rounded-lg text-xs cursor-pointer transition-all duration-300">
        <Image src={ROW_ICON} width={15} height={15} alt="ROW_ICON" />
        <span>1/1 Row</span>
      </div>

      <div className="flex items-center gap-x-3 hover:bg-gray-100 border border-transparent hover:border-neutral-200 px-3 py-2 rounded-lg text-xs cursor-pointer transition-all duration-300">
        <Image src={COLUMN_ICON} width={15} height={15} alt="ROW_ICON" />
        <span>3/3 Column</span>
      </div>

      <div className="flex items-center gap-x-3 hover:bg-gray-100 border border-transparent hover:border-neutral-200 px-3 py-2 rounded-lg text-xs cursor-pointer transition-all duration-300">
        <Image src={FILTER_ICON} width={15} height={15} alt="ROW_ICON" />
        <span>0 Filter</span>
      </div>

      <div className="flex items-center gap-x-3 hover:bg-gray-100 border border-transparent hover:border-neutral-200 px-3 py-2 rounded-lg text-xs cursor-pointer transition-all duration-300">
        <Image src={SORT_ICON} width={15} height={15} alt="ROW_ICON" />
        <span>Sort</span>
      </div>
    </div>
  );
};

export default Filters;
