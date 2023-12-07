import React, { useState } from "react";
import globals from "../styles/global";
import Toggle from "./Toggle";
import Accordian from "./Accordian";
import rules from "../assets/rules.png";
import vector from "../assets/vector1.png";
import boy from "../assets/boy.png";
import rightArrow from "../assets/right-arrow.png";
import bothArrow from "../assets/both-arrow.svg";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import PlayerCard from "./PlayerCard";

const accodianComp = (
  <div className="text-sm font-medium" style={globals.textColor10}>
    1. You have to select 5 coins to make your own virtual portfolio.
    <br />
    2. Proceed to submit your portfolio and pay the entry fee for the league.
    <br /> 3. Once all spots in the league are filled, all submitted.
    <br /> 4. You have to select 5 coins to make your own virtual portfolio.
    <br /> 5. Proceed to submit your portfolio and pay the entry fee for the
    league.
    <br /> 6. Once all spots in the league are filled, all submitted.
  </div>
);

const GameBoard = () => {
  const [toggle, setToggle] = useState("left");

  const onToggleClick = () => {
    if (toggle === "left") setToggle("right");
    else setToggle("left");
  };

  return (
    <div>
      <div className="p-6 rounded w-full" style={globals.bgColor7}>
        <div
          className="text-xl font-semibold text-center"
          style={globals.textColor8}
        >
          Head 2 Head Battles
        </div>
        <div className="mt-2 flex flex-row justify-between">
          <div className="flex flex-1" />
          <div
            className="text-base flex flex-1 font-medium justify-center"
            style={globals.textColor9}
          >
            Double or Nothing
          </div>
          <div className="flex flex-1 justify-end">
            <Toggle
              selected={toggle}
              onToggle={onToggleClick}
              firstValue="Practice"
              secondValue="Paid"
            />
          </div>
        </div>
        <div
          className="py-4 my-4 border-y w-full"
          style={globals.borderColor11}
        >
          <div
            style={globals.bgColor13}
            className="w-full h-[582px] rounded flex flex-row"
          >
            <div className="flex flex-1">
              <img src={vector} alt="title" className="w-7/12 h-[582px]" />
              <div
                className="absolute top-[40%] left-[35%]"
                style={globals.transform}
              >
                <PlayerCard />
              </div>
            </div>
            <div
              className="flex flex-1 absolute left-3/4 top-[40%]"
              style={globals.transform}
            >
              <PlayerCard />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div
            className="flex flex-row rounded px-4 py-3"
            style={globals.bgColor1}
          >
            <div className="flex flex-row items-center">
              <img src={boy} alt="title" className="w-10 h-10" />
              <div
                className="ml-3 text-base font-semibold"
                style={globals.textColor10}
              >
                Player 1
              </div>
            </div>
            <div className="flex flex-row items-center ml-6">
              <img src={boy} alt="title" className="w-10 h-10" />
              <div
                className="ml-3 text-base font-semibold"
                style={globals.textColor10}
              >
                You
              </div>
            </div>
          </div>
          <div
            className="flex flex-row items-center px-8 rounded w-[228px]"
            style={globals.bgColor6}
          >
            <div className="text-base font-semibold text-white">
              Select a coin to enter the battle
            </div>
            <img src={rightArrow} alt="title" className="w-6 h-6 ml-3" />
          </div>
          <div
            className="px-3.5 py-2.5 flex flex-row items-center rounded"
            style={globals.bgColor1}
          >
            <div
              className="w-[78px] text-sm font-semibold"
              style={globals.textColor8}
            >
              how much you stake
            </div>
            <div className="flex flex-row ml-2">
              <div
                className="p-4 py-3 text-base font-semibold rounded"
                style={{ ...globals.textColor8, ...globals.bgColor4 }}
              >
                $0
              </div>
              <div className="flex flex-col justify-between">
                <img src={plus} alt="title" className="w-6 h-6" />
                <img src={minus} alt="title" className="w-6 h-6" />
              </div>
            </div>
            <img src={bothArrow} alt="title" className="w-6 h-6 ml-3.5" />
            <div
              className="w-[78px] text-sm font-semibold ml-3.5"
              style={globals.textColor8}
            >
              how much you win
            </div>
            <div
              className="p-4 py-3 text-base font-semibold rounded"
              style={{ ...globals.bgColor4, ...globals.textColor14 }}
            >
              Glory
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Accordian icon={rules} title="Game Rules" initialState="closed">
          {accodianComp}
        </Accordian>
      </div>
      <div className="mt-6" title="Game Rules">
        <Accordian icon={rules} title="Game Rules">
          {accodianComp}
        </Accordian>
      </div>
    </div>
  );
};

export default GameBoard;
