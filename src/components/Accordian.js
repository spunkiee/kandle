import React, { useState } from "react";
import arrowRight from "../assets/arrow-right.png";
import arrowTop from "../assets/arrow-top.png";
import globals from "../styles/global";

const Accordian = ({ icon, title, children, initialState = "open" }) => {
  const [state, setState] = useState(initialState === "open");

  return (
    <div
      className={`w-full px-6 cursor-pointer rounded ${
        state ? "py-6" : "py-4"
      }`}
      onClick={() => setState(!state)}
      style={globals.bgColor7}
    >
      <div className={`flex flex-row justify-between items-center`}>
        <div className="flex flex-row items-center">
          <img src={icon} alt="menu" className="h-5 w-5" />
          <div
            className="ml-2 text-base font-semibold"
            style={globals.textColor12}
          >
            {title}
          </div>
        </div>
        <img
          src={state ? arrowTop : arrowRight}
          alt="menu"
          className="h-5 w-5"
        />
      </div>
      {state && <div className="mt-5">{children}</div>}
    </div>
  );
};

export default Accordian;
