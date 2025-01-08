"use client";
import Image from "next/image";
import { LEFT_ARROW } from "@/constants/assets";
import { useState } from "react";
import Switch from "react-switch";

const Navbar = () => {
  const [checked, setCheked] = useState(true);
  return (
    <div className="w-full border p-4 flex items-center justify-between text-[14px] h-[60px]">
      <div className="flex items-center gap-x-4">
        <Image src={LEFT_ARROW} width={15} height={15} alt="left-arrow" />
        <span className="text-neutral-500">Name of the file</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-x-3">
          <Switch
            className="react-switch"
            onChange={() => setCheked((pre) => !pre)}
            checked={checked}
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            required
          />
          <span className="text-[#0E9F6E]">Auto Save</span>
        </div>
        <div className="w-[30px] h-[30px] rounded-full bg-red-400/30"></div>
      </div>
    </div>
  );
};

export default Navbar;
