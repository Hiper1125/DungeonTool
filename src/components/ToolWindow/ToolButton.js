import React from "react";

const ToolButton = (name, icon, action) => {
  return (
    <div className="window-button h-10 w-20bg-primary rounded-md flex flex-row justify-center items-center">
        <h1>{window.upperText(name)}</h1>
    </div>
  );
};

ToolWindow.defaultProps = {
    name: "App"
  };

export default ToolButton;