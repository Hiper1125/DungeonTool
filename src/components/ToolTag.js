import React from "react";

const ToolTag = ({ name }) => {
  return (
    <div className="tool-tag flex flex-col items-center absolute top-0 left-1/2 opacity-0 transition-opacity">
      <div className="w-full bg-gray rounded-lg">
        <h1 className="px-2 py-2">{name}</h1>
      </div>
      <div class="w-3 overflow-hidden inline-block">
        <div class=" h-2 w-2 bg-gray -rotate-45 transform origin-top-left"></div>
      </div>
    </div>
  );
};

ToolTag.defaultProps = {
  name: "Tool Name",
};

export default ToolTag;
