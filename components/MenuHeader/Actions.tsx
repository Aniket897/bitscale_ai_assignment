import {
  DELETE_ICON,
  DOWNLOAD_ICON,
  SHARE_ICON,
  STAR_ICON,
} from "@/constants/assets";
import Image from "next/image";

const Actions = () => {
  return (
    <div className="flex lg:items-center lg:justify-center gap-x-4">
      <button className="bg-black hover:bg-black/70 transition-all duration-300 text-white rounded-md p-2 px-4 cursor-pointer flex items-center justify-center gap-x-2">
        <Image src={STAR_ICON} width={15} height={15} alt="STAR_ICON" />
        Enrich
      </button>
      <button className="hover:bg-red-100 p-3 rounded-lg">
        <Image src={SHARE_ICON} width={15} height={15} alt="" />
      </button>
      <button className="hover:bg-red-100 p-3 rounded-lg">
        <Image src={DOWNLOAD_ICON} width={15} height={15} alt="" />
      </button>
      <button className="hover:bg-red-100 p-3 rounded-lg">
        <Image src={DELETE_ICON} width={15} height={15} alt="" />
      </button>
    </div>
  );
};

export default Actions;
