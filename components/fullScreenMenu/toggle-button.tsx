import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

export default function ToggleButton({open, setOpen}: {open: boolean; setOpen: Dispatch<SetStateAction<boolean>>;}) {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="animate-grow_in shadow-md shadow-black fixed right-4 top-5 m-5 z-50 w-16 h-16 rounded-full bg-[#323E56] cursor-pointer hover:bg-[#4c5c7c] transition-colors duration-200 ease-in-out"
    >
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col gap-y-2 w-[30px]  transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={cn(
              "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "bg-white h-[2px] w-3 transform transition-all duration-300 origin-left delay-150",
              "hover:w-7",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ",
              {
                "translate-x-0 w-12": open,
              }
            )}
          >
            <div
              className={cn(
                "absolute bg-white h-[2px] w-7 transform transition-all duration-500 rotate-0 delay-300 ",
                {
                  "rotate-45": open,
                }
              )}
            />
            <div
              className={cn(
                "absolute bg-white h-[2px] w-7 transform transition-all duration-500 -rotate-0 delay-300 ",
                {
                  "-rotate-45": open,
                }
              )}
            />
          </div>
        </div>
      </div>
    </button>
  );
}
