import React from "react";
import dice from "../images/dice.png";
import guide from "../images/guide.png";
import generators from "../images/generators.png";
import schedule from "../images/schedule.png";
import sounds from "../images/sounds.png";
import play from "../images/play.png";

const ToolBar = () => {
  return (
    <div className="tool-bar w-80 h-20 flex justify-center items-center">
      <div className="bg-primary h-14 w-full rounded-full flex justify-start space-x-2 pl-2 items-center">
        <img src={schedule} alt="schedule" className="items-center w-8 h-8" />
        <img src={play} alt="play" className="items-center w-8 h-8" />
        <img src={guide} alt="guide" className="items-center w-8 h-8" />
        <img src={dice} alt="dice" className="items-center w-8 h-8" />
        <img src={generators} alt="generators" className="items-center w-8 h-8" />
        <img src={sounds} alt="sounds" className="items-center w-8 h-8" />
      </div>
    </div>
  );
};

export default ToolBar;
