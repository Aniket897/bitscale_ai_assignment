import {
  ACTION_COL_IMAGE,
  APPLE_LOGO,
  BITSCALE_LOGO,
  BMW_LOGO,
  ENRICH_COL_IMAGE,
  FIGMA_LOGO,
  GOOGLE_LOGO,
  INPUT_COL_IMAGE,
  LINK_ICON,
  LOADING_ICON,
  PLUS_ICON,
  WARNING_TRIANGLE_ICON,
} from "@/constants/assets";
import Image from "next/image";
import PlayButton from "./PlayButton";

const emptyCells = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const SheetHeader = () => {
  return (
    <thead>
      <tr className="bg-gray-100/70 flex border-b">
        <th className="border-r px-4 py-2 text-left font-medium text-gray-700 w-[50px]"></th>
        <th className="border-r px-4 py-2 text-left font-medium text-gray-700 w-[50px]"></th>
        <th className="border-r bg-[#FEF2C7] px-4 py-2 font-medium text-gray-700 flex items-center gap-x-2 w-[300px]">
          <Image src={INPUT_COL_IMAGE} width={15} height={15} alt="plus-icon" />
          Input Column
        </th>
        <th className="border-r px-4 py-2 font-medium text-gray-700 flex items-center gap-x-2 w-[300px]">
          <Image
            src={ACTION_COL_IMAGE}
            width={15}
            height={15}
            alt="plus-icon"
          />
          Action Column
        </th>
        <th className="border-r px-4 py-2 font-medium text-gray-700 flex items-center gap-x-2 w-[300px]">
          <Image
            src={ENRICH_COL_IMAGE}
            width={15}
            height={15}
            alt="plus-icon"
          />
          Enrich Company
        </th>
        <th className="px-4 py-2 font-medium text-gray-700 flex items-center gap-x-2 min-w-[300px]">
          <Image src={PLUS_ICON} width={15} height={15} alt="plus-icon" />
          Add Column
        </th>
      </tr>
    </thead>
  );
};

const Sheet = () => {
  return (
    <div className="text-[14px] w-full h-full">
      <div className="h-full overflow-auto">
        <table className="w-full table-auto border-collapse border-gray-300">
          <SheetHeader />
          <tbody>
            <tr className="flex border-b">
              <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r">
                1
              </td>
              <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r">
                <PlayButton />
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                Oct 12, 2024 at 14:08 PM
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                Bitscale Evaluation - Account relev...
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                <div className="flex items-center gap-x-2">
                  <Image src={BITSCALE_LOGO} width={15} height={15} alt="" />
                  Bitscale Evaluation - Account r...
                </div>
              </td>
            </tr>

            <tr className="flex border-b">
              <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r">
                2
              </td>
              <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r">
                <PlayButton />
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                Oct 12, 2024 at 14:08 PM
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                <div className="flex items-center gap-x-2 italic">
                  <Image
                    src={WARNING_TRIANGLE_ICON}
                    width={15}
                    height={15}
                    alt=""
                  />
                  cell data size exceeds limit
                </div>
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                <div className="flex items-center gap-x-2">
                  <Image src={BMW_LOGO} width={15} height={15} alt="" />
                  BMW Evaluation - Relevancy c...
                </div>
              </td>
            </tr>

            <tr className="flex border-b">
              <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r">
                3
              </td>
              <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r">
                <PlayButton />
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                Oct 12, 2024 at 14:08 PM
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                <div className="flex items-center gap-x-2">
                  <Image src={LINK_ICON} width={15} height={15} alt="" />
                  <a
                    className="text-blue-500 underline underline-offset-4"
                    href="www.google.com"
                    target="_blank"
                  >
                    www.google.com
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                <div className="flex items-center gap-x-2">
                  <Image src={GOOGLE_LOGO} width={15} height={15} alt="" />
                  Google Evaluation - Lilevancy...
                </div>
              </td>
            </tr>

            <tr className="flex border-b">
              <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r">
                4
              </td>
              <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r">
                <PlayButton />
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                Oct 12, 2024 at 14:08 PM
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                <div className="flex items-center gap-x-2 italic">
                  <Image src={LOADING_ICON} width={15} height={15} alt="" />
                  Loading data, Please wait
                </div>
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                <div className="flex items-center gap-x-2">
                  <Image src={APPLE_LOGO} width={15} height={15} alt="" />
                  Apple Evaluation - Olvancy che...
                </div>
              </td>
            </tr>

            <tr className="flex border-b">
              <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r">
                5
              </td>
              <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r">
                <PlayButton />
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                Oct 12, 2024 at 14:08 PM
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                <div className="flex items-center gap-x-2 italic">
                  <Image src={LOADING_ICON} width={15} height={15} alt="" />
                  Loading data, Please wait
                </div>
              </td>
              <td className="py-2 px-4 w-[300px] border-r">
                <div className="flex items-center gap-x-2">
                  <Image src={FIGMA_LOGO} width={15} height={15} alt="" />
                  Figma Evaluation - Evancy che...
                </div>
              </td>
            </tr>

            {/* RENDERING EMPTY CELLS */}
            <tr className="flex bg-gray-100/70 border-b">
              <td className="w-[50px] flex items-center justify-center py-4 px-4 border-r"></td>
              <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r"></td>
              <td className="py-2 px-4 w-[300px] border-r flex items-center  gap-x-3 text-xs">
                <Image src={PLUS_ICON} width={10} height={15} alt="plus-icon" />
                Add Row
              </td>
              <td className="py-2 px-4 w-[300px] border-r"></td>
              <td className="py-2 px-4 w-[300px] border-r"></td>
            </tr>
            {emptyCells.map((item, index) => (
              <tr className="flex bg-gray-100/70 border-b">
                <td className="w-[50px] flex items-center justify-center py-4 px-4 border-r"></td>
                <td className="w-[50px] flex items-center justify-center py-2 px-4 border-r"></td>
                <td className="py-2 px-4 w-[300px] border-r"></td>
                <td className="py-2 px-4 w-[300px] border-r"></td>
                <td className="py-2 px-4 w-[300px] border-r"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sheet;
