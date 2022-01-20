import React from "react";
import Tools from "../json/tools.json";
import ToolIcon from "./ToolIcon";

const ToolBar = () => {
  return (
    <div className="tool-bar w-auto h-20 flex items-center">
      <div className="bg-primary h-14 w-full rounded-full flex justify-start space-x-2 pl-2 pr-[5.5rem] items-center">
        {Tools.map((tool, index) => 
          <ToolIcon key={index} name={tool.name} />
        )}
      </div>
    </div>
  );
};

export default ToolBar;
