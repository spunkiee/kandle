import React from "react";
import globals from "../styles/global";

const LeftMenuItem = ({ list }) => {
  return (
    <div style={globals.bgColor1} className="rounded">
      {list.map((item) => (
        <div className="flex flex-row px-4 py-3 items-center">
          <img
            src={item.activeImage ? item.activeImage : item.inactiveImage}
            alt="title"
            className="h-6 w-6"
          />
          <div
            className="ml-3 text-sm font-semibold"
            style={item.activeImage ? globals.textWhite : globals.textColor3}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftMenuItem;
