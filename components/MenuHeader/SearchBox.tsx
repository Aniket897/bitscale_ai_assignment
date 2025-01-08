import { SEARCH_ICON } from "@/constants/assets";
import Image from "next/image";

const SearchBox = () => {
  return (
    <div className="relative flex-1 max-w-[70vw]">
      <input
        className="w-full p-2 border shadow-sm rounded-xl px-5 pl-[35px] bg-gray-50"
        type="text"
        placeholder="Search"
      />
      <Image
        className="opacity-50 absolute top-[13px] left-3"
        src={SEARCH_ICON}
        width={15}
        height={15}
        alt="SEARCH_ICON"
      />
    </div>
  );
};

export default SearchBox;
