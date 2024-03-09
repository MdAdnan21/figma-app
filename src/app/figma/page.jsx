import React from "react";
import Headers from "./_componentes/Headers";
import LeftSide from "./_componentes/LeftSide";
import RightSide from "./_componentes/RightSide";
import Middle from "./_componentes/Middle";

export default function Figma() {
  return (
    <div className="h-screen">
      <Headers />
      <div className="flex border-t border-t-black pt-4">
        <LeftSide />
        <Middle />
        <RightSide />
      </div>
    </div>
  );
}
