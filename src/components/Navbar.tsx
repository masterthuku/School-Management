
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React, { useEffect } from "react";



const Navbar = async () => {
 
  const user = await currentUser();

  
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input placeholder="Search" type="text" className="w-[200px] p-2 bg-transparent outline-none" />
      </div>

      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="flex absolute -top-3 -right-3 w-5 h-5 items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Peter Thuku</span>
          <span className="text-[10px] text-gray-500 text-right">
            {user?.publicMetadata.role as string}
          </span>
        </div>
       {/*  <Image src="/avatar.png" alt="" width={40} height={40} className="rounded-full" /> */}
       <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
