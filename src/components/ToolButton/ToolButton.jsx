import React from "react";
import ToolBar from "./ToolBar";
import dice from "../../assets/icons/dice.png";

const ToolButton = () => {
  return (
    <div className="tool-button absolute bottom-10 right-10 z-[15]">
      <div
        className="absolute rounded-full right-0 bg-primary w-20 h-20 flex items-center justify-center shadow-strong cursor-pointer z-[16]"
        onClick={(e) => {
          e.currentTarget.parentElement.getElementsByClassName("tool-bar")[0].classList.toggle("opacity-0");
        }}>
        <img src={dice} alt="dice" className="items-center w-16 h-16" />
      </div>
      <ToolBar />
    </div>
  );
};

export default ToolButton;