import React from "react";
import globals from "../styles/global";

const Toggle = ({ selected = "left", onToggle, firstValue, secondValue }) => {
  return (
    <div
      className="p-[5px] flex flex-row rounded-lg cursor-pointer"
      style={globals.bgColor1}
      onClick={onToggle}
    >
      <div
        className="px-7 py-2.5 font-semibold"
        style={{
          ...globals.font13,
          ...globals.borderRadius5,
          ...(selected === "left" ? globals.bgColor6 : {}),
          ...(selected === "left" ? globals.textWhite : globals.textColor10),
        }}
      >
        {firstValue}
      </div>
      <div
        className="px-7 py-2.5 ml-[5px] font-semibold"
        style={{
          ...globals.font13,
          ...globals.borderRadius5,
          ...(selected === "right" ? globals.bgColor6 : {}),
          ...(selected === "right" ? globals.textWhite : globals.textColor10),
        }}
      >
        {secondValue}
      </div>
    </div>
  );
};

export default Toggle;
