import { PropsWithChildren } from "react";

interface SidebarProps extends PropsWithChildren {
  isActive?: boolean;
}

const SidebarItem = ({ children, isActive = false }: SidebarProps) => {
  return (
    <div
      className={`hover:bg-red-100 w-[40px] h-[40px] flex items-center justify-center rounded-md cursor-pointer transition-all duration-300 ${
        isActive && "bg-red-100"
      }`}
    >
      {children}
    </div>
  );
};

export default SidebarItem;
