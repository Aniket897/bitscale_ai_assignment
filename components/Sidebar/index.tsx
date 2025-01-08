import SidebarItem from "./SidebarItem";
import Image from "next/image";
import {
  COIN_STACK_ICON,
  CREDIT_CARD_ICON,
  INTERSECT_CIRCLE_ICON,
  PUZZLE_ICON,
  TABLE_ICON,
} from "@/constants/assets";

const SidebarData = {
  headerData: [
    {
      name: "Home",
      iconUrl: TABLE_ICON,
      isActive: true,
    },
    {
      name: "Home",
      iconUrl: PUZZLE_ICON,
      isActive: false,
    },
    {
      name: "Home",
      iconUrl: INTERSECT_CIRCLE_ICON,
      isActive: false,
    },
  ],
  footerData: [
    {
      name: "Home",
      iconUrl: CREDIT_CARD_ICON,
      isActive: false,
    },
    {
      name: "Home",
      iconUrl: COIN_STACK_ICON,
      isActive: false,
    },
  ],
};

const Sidebar = () => {
  return (
    <div className="w-[70px] h-full flex flex-col items-center justify-between p-4 border-r pb-5">
      {/* SIDEABR HEADER DATA */}
      <div className="space-y-5">
        {SidebarData.headerData.map((item, index) => {
          return (
            <SidebarItem key={index} isActive={item.isActive}>
              <Image
                src={item.iconUrl}
                width={20}
                height={20}
                alt={item.name}
              />
            </SidebarItem>
          );
        })}
      </div>
      {/* SIDEABR FOOTER DATA */}
      <div className="space-y-5">
        {SidebarData.footerData.map((item, index) => {
          return (
            <SidebarItem key={index} isActive={item.isActive}>
              <Image
                src={item.iconUrl}
                width={20}
                height={20}
                alt={item.name}
              />
            </SidebarItem>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
