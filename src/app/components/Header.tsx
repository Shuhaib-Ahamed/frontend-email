import Avatar from "./Avatar";
import IconButton from "./IconButton";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface HeaderProps {
  index: number;
  setIndex: Function;
  leadsArr: Array<any>;
  queue: number;
}
export const Header = ({ index, setIndex, leadsArr, queue }: HeaderProps) => {
  return (
    <div className="flex w-full items-center justify-between border-b-[1px] border-gray-300 p-4">
      <div className="flex items-center gap-6">
        <Avatar size="w-24 h-24" url={leadsArr[index]?.avatar} />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h2 className="text-3xl font-semibold text-gray-800">
              {leadsArr[index]?.full_name}
            </h2>
          </div>
          <p className="text-md font-medium text-gray-800">
            {leadsArr[index]?.title}
          </p>
          <p className=" text-sm font-normal text-gray-800">
            Based in {leadsArr[index]?.city}, {leadsArr[index]?.country} •{" "}
            {leadsArr[index]?.email}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-6">
        <div className="flex items-center gap-6">
          <IconButton
            onClick={() => {
              if (index - 1 >= 0) {
                setIndex(index - 1);
              }
            }}
            icon={<IoIosArrowBack />}
          />
          <IconButton
            onClick={() => {
              if (index + 1 < leadsArr.length) {
                setIndex(index + 1);
              }
            }}
            icon={<IoIosArrowForward />}
          />
        </div>
        <span className="text-sm text-gray-500">
          {index + 1} of {leadsArr?.length} Profiles • {queue} Completed
        </span>
      </div>
    </div>
  );
};
