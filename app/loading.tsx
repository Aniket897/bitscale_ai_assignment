import { LOADING_ICON } from "@/constants/assets";
import Image from "next/image";

const loading = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-y-2">
      <Image
        className="animate-spin"
        src={LOADING_ICON}
        width={15}
        height={15}
        alt=""
      />
      <p>Loading....</p>
    </div>
  );
};

export default loading;
