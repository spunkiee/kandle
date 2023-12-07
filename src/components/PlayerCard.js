import React from "react";
import boy from "../assets/boy.png";
import mark from "../assets/mark.png";
import globals from "../styles/global";

const PlayerCard = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center py-10 px-4"
        style={globals.bgSome}
      >
        <div className="flex flex-col justify-center items-center">
          <img src={mark} alt="title" className="w-[72px] h-[72px]" />
          <div
            className="mt-8 text-sm font-semibold"
            style={globals.textColor15}
          >
            Select a coin
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mt-8">
        <img src={boy} alt="title" className="w-16 h-16" />
        <div
          className="ml-3 text-base font-semibold"
          style={globals.textColor10}
        >
          Player 1
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
