import React from "react";
import { AquionLogo } from "./aquion-logo";

export function Footer() {
  return (
    <div className="relative border-t border-gray-200 px-8 py-20 bg-gradient-to-b from-blue-50 to-white w-full overflow-hidden mx-auto max-w-7xl">
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-px flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-56">
          <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(0,102,204,0)_0%,#0066CC_32.29%,rgba(0,102,204,0.3)_67.19%,rgba(0,102,204,0)_100%)] blur-xs" />
        </div>
      </div>

      <div className="max-w-7xl my-28 mx-auto text-sm text-gray-600 flex flex-col justify-center items-center text-center">
        <div className="mb-10">
          <AquionLogo />
          <p className="mt-4 max-w-xs text-gray-600">
            Harvesting clean water from air through open-source innovation for rural communities.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Aquion Project. Released under Creative Commons BY-SA 4.0 License.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Bringing clean water within reach — one square metre and one byte at a time.
          </p>
        </div>
      </div>
    </div>
  );
}