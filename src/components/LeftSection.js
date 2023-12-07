import React from "react";
import globals from "../styles/global";
import menu from "../assets/menu.png";
import LeftMenuComponent from "./LeftMenuComponent";

const LeftSection = () => {
  return (
    <div
      className="w-60 p-2.5"
      style={{ ...globals.bgColor2, ...globals.heigth888 }}
    >
      <div className="p-2.5 h-11 w-11 rounded mb-2.5" style={globals.bgColor1}>
        <img src={menu} alt="menu" className="h-6 w-6" />
      </div>
      <LeftMenuComponent />
    </div>
  );
};

export default LeftSection;
