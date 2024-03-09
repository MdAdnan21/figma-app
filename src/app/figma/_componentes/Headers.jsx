import React from "react";
import { TbLocationShare } from "react-icons/tb";
import { FaHand } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

export default function Headers() {
  return (
    <div className="bg-[#2C2C2C] w-full h-14 flex items-center justify-between px-5 fixed top-0">
      <div className="w-1/4 flex items-center gap-x-7  text-white">
        <TbLocationShare className="hover:bg-[#0C8CE9] text-white  text-xl font-bold" />
        <FaHand className="hover:bg-[#0C8CE9] text-white  text-xl font-bold" />
        <BiMessageRounded className="hover:bg-[#0C8CE9] text-white  text-xl font-bold" />
        <FaFigma className="hover:bg-[#0C8CE9] text-white  text-xl font-bold" />
      </div>
      <div className="w-full flex items-center justify-center gap-x-4 text-white">
        <div className="">Webranc</div>
        <button className="px-5  rounded-lg border border-white p-1 hover:bg-gray-500">
          Ask To Edit
        </button>
      </div>
      <div className=" w-1/4 flex items-center justify-end gap-x-4 text-white">
        <FaUserCircle className=" text-red-800  text-2xl font-bold" />
        <button className="px-5  rounded-lg bg-[#0C8CE9] hover:bg-gray-500">
          Share
        </button>
        <MdOutlinePlaylistAddCheckCircle className="text-[#0C8CE9]  text-xl font-bold" />
        <FaPlay className=" text-[#0C8CE9]  text-xl font-bold" />
        <div className="">2%</div>
      </div>
    </div>
  );
}
