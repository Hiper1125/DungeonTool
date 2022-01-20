import React from "react";
import ToolButton from "../ToolButton/ToolButton";
import ToolView from "./ToolView";
import WindowButton from "./WindowButton";

const ToolWindow = ({
  name,
  version,
  windowButtons,
  title,
  subtile,
  view,
  actionButtons,
}) => {
  return (
    <div className="window flex flex-col bg-solidgray w-[40rem] h-[30rem] rounded-lg border-primary border-[0.1rem] border-opacity-5 z-20">
      <div className="title-bar flex flex-row justify-around mt-1">
        <h1 className="text-xs">
          {name} v{version}
        </h1>
      </div>

      <div className="window-content h-[90%] flex flex-col items-center justify-center mt-1 space-y-2">
      <h1 className="text-4xl">
          {title}
        </h1>
        <h2 className="text-2xl">
          {subtile}
        </h2>

        <ToolView/>

        <div className="button-bar flex flex-row justify-around mt-1">
          <ToolButton></ToolButton>
          <ToolButton></ToolButton>
          <ToolButton></ToolButton>
        </div>
      </div>
    </div>
  );
};

ToolWindow.defaultProps = {
  name: "App",
  version: "1.0",
  title: "Default App",
  subtile: "Default App Sub-Title"
};

export default ToolWindow;