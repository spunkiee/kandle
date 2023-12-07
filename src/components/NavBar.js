import React from "react";
import globals from "../styles/global";
import kandle from "../assets/kandle.png";
import boy from "../assets/boy.png";
import message from "../assets/message.png";
import t from "../assets/t.png";

const NavBar = () => {
  return (
    <div style={globals.bgColor4} className="w-full px-12">
      <div className="flex flex-row items-center justify-between h-full px-4 py-2.5">
        <img src={kandle} alt="menu" className="h-6 w-22.5" />
        <div
          className="flex flex-row items-center rounded"
          style={globals.bgColor5}
        >
          <div className="flex flex-row items-center py-2 px-4">
            <div className="text-sm text-white font-semibold">0.0000</div>
            <img src={t} alt="menu" className="h-6 w-5 ml-1" />
          </div>
          <div
            className="text-xs font-semibold text-white p-3.5 rounded-r"
            style={globals.bgColor6}
          >
            Wallet
          </div>
        </div>
        <div className="flex flex-row items-center">
          <img src={boy} alt="menu" className="h-11 w-11" />
          <img src={message} alt="menu" className="h-7 w-7 ml-6" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
