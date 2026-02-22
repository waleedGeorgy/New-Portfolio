import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

export default function ToggleButton({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; }) {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="animate-grow_in shadow-md shadow-black/50 fixed right-4 top-5 m-5 z-[100] p-5 rounded-full bg-blue-cosmos hover:brightness-150 cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-3"
    >
      <div className="relative flex items-center justify-center">
        {/* Hamburger icon */}
        <div className="flex flex-col gap-y-1.5 transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={cn(
              "bg-white h-0.5 w-5 transform transition-all duration-300 origin-left",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "bg-white h-0.5 w-5 rounded transform transition-all duration-300 delay-75",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "bg-white h-0.5 w-2.5 transform transition-all duration-300 origin-left delay-150",
              "hover:w-7",
              {
                "translate-x-10": open,
              }
            )}
          />
          {/* X icon */}
          <div
            className={cn(
              "absolute items-center justify-between transform transition-all duration-500 top-2 -translate-x-10",
              {
                "translate-x-0 w-12": open,
              }
            )}
          >
            <div
              className={cn(
                "absolute bg-white h-0.5 w-5 transform transition-all duration-500 rotate-0 delay-300",
                {
                  "rotate-45": open,
                }
              )}
            />
            <div
              className={cn(
                "absolute bg-white h-0.5 w-5 transform transition-all duration-500 -rotate-0 delay-300",
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
