import React from "react";

export default function RightSide() {
  return (
    <div className="w-[15%] h-full bg-[#2C2C2C] fixed left-0 top-12 overflow-y-auto pt-3">
      {left_dummy_data?.map((item, i) => (
        <div key={i} className="flex flex-col  gap-y-4 px-4 py-2">
          <div className="flex text-white   hover:bg-gray-600 hover:rounded-full px-4">
            <li />
            <p className="text-sm  font-semibold ">{item?.leftData}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const left_dummy_data = [
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
  { leftData: "Left Side" },
];
