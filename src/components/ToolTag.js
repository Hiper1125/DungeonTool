import React from "react";

const ToolTag = ({ name }) => {
  return (
    <div className="tool-tag flex flex-col items-center">
      <div className="w-full bg-gray rounded-lg">
          <h1 className="px-2 py-2">{name}</h1>
      </div>
    <img src="" className="w-6 h-3 -mt-1"></img>
    </div>
  );
};

ToolTag.defaultProps = {
    name: "Tool Name",
  };

export default ToolTag;