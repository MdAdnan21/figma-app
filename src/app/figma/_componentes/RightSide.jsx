import React from "react";

export default function RightSide() {
  return (
    <div className="w-[15%] h-full bg-[#2C2C2C] fixed top-12 right-0 overflow-y-auto">
      <div className="flex flex-col items-center gap-y-4 pt-5">
        <div className="flex items-start gap-x-3 text-xs text-white font-semibold">
          <h1>Commen</h1>
          <h1>Properties</h1>
          <h1>Export</h1>
        </div>
        {right_dummy_data?.map((item, i) => (
          <div
            key={i}
            className="flex text-white gap-x-8  hover:bg-gray-600 hover:rounded-full px-4 justify-end items-end"
          >
            <p className="text-sm  font-semibold">{item?.leftData}</p>
            <li />
          </div>
        ))}
      </div>
    </div>
  );
}

const right_dummy_data = [
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
  { leftData: "Right Side" },
];
