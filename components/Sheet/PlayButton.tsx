import { PLAY_CIRCL_ICON } from "@/constants/assets";
import Image from "next/image";

const PlayButton = () => {
  return (
    <div>
      <Image src={PLAY_CIRCL_ICON} width={20} height={20} alt="" />
    </div>
  );
};

export default PlayButton;
