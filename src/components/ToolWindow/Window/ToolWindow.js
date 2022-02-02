import React from "react";
import ActionButton from "../Components/ActionButton";
import WindowButton from "../Components/WindowButton";
import PropTypes from "prop-types";

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
    viewComponent = (
      <div className="window-view relative h-full w-[85%] bg-gray border-primary border-[0.1rem] border-opacity-[0.02] flex flex-col items-center justify-center">
        {view}
      </div>
    );
  }

  return (
    <div className="window absolute flex flex-col bg-solidgray w-[50rem] h-[35rem] rounded-lg border-primary border-[0.1rem] border-opacity-5 z-20">
      <div className="title-bar flex flex-row justify-between mt-1 mx-1">
        <h1 className="text-[0.6rem] opacity-60">
          {name} v{version}
        </h1>
        <div className="flex flex-row space-x-1">
          {windowButtons.map((button, index) => (
            <WindowButton key={index} {...button} />
          ))}
        </div>
      </div>

      <div className="window-content h-[90%] flex flex-col items-center justify-center mt-3 space-y-3">
        <h1 className="text-4xl uppercase">{title}</h1>
        <h2 className="text-2xl">{subtile}</h2>

        {viewComponent}

        <div className="button-bar flex flex-row justify-around pt-2 space-x-6">
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
  windowButtons: [
    {
      name: "close",
      action: (e) => {
        e.currentTarget.parentElement
          .getElementsByClassName("window")[0]
          .remove();
      },
    },
  ],
  actionButtons: [],
};

ToolWindow.propsTypes = {
  name: PropTypes.string,
  version: PropTypes.string,
  title: PropTypes.string,
  subtile: PropTypes.string,
  view: PropTypes.element,
  windowButtons: PropTypes.array,
};

export default ToolWindow;