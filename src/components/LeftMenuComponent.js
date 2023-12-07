import React from "react";
import { topMenuData, bottomMenuData } from "../mock/leftMenuData";
import LeftMenuItem from "./LeftMenuItem";

const LeftMenuComponent = () => {
  return (
    <div className="mt-6">
      {topMenuData.map((item) => (
        <div className="mt-2">
          <LeftMenuItem list={item} />
        </div>
      ))}
      <div className="mt-20">
        {bottomMenuData.map((item) => (
          <div className="mt-2">
            <LeftMenuItem list={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftMenuComponent;
