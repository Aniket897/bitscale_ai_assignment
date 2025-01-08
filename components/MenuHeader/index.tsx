import Actions from "./Actions";
import Filters from "./Filters";
import SearchBox from "./SearchBox";

const MenuHeader = () => {
  return (
    <div className="p-4 gap-y-4 flex flex-col lg:flex-row lg:items-center lg:justify-between w-full text-[14px]">
      <div className="flex md:items-center gap-x-8 lg:w-[60%] flex-col md:flex-row">
        <SearchBox />
        <Filters />
      </div>
      <div className="lg:flex-2">
        <Actions />
      </div>
    </div>
  );
};

export default MenuHeader;
