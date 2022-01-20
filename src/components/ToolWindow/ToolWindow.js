import React from "react";
import ActionButton from "./ActionButton";
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
  let viewComponent = null;

  if (view) {
    viewComponent = <ToolView view={view} />;
  }

  return (
    <div className="window flex flex-col bg-solidgray w-[40rem] h-[30rem] rounded-lg border-primary border-[0.1rem] border-opacity-5 z-20">
      <div className="title-bar flex flex-row justify-between mt-1 mx-1">
        <h1 className="text-xs">
          {name} v{version}
        </h1>
        <div className="flex flex-row space-x-1">
          {windowButtons.map((button, index) => (
            <WindowButton key={index} {...button} />
          ))}
        </div>
      </div>

      {viewComponent}

      <div className="window-content h-[90%] flex flex-col items-center justify-center mt-1 space-y-3">
        <h1 className="text-4xl">{title}</h1>
        <h2 className="text-2xl">{subtile}</h2>

        <div className="button-bar flex flex-row justify-around space-x-6">
          {actionButtons.map((button, index) => (
            <ActionButton key={index} {...button} />
          ))}
        </div>
      </div>
    </div>
  );
};

ToolWindow.defaultProps = {
  name: "App",
  version: "1.0",
  title: "Default App",
  subtile: "Default App Sub-Title",
  windowButtons: [{ name: "minimize" }, { name: "expand" }, { name: "close" }],
  actionButtons: [],
};

export default ToolWindow;
