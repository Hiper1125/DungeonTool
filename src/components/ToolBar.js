import React from "react";
import Tools from "../json/tools.json";
import ToolIcon from "./ToolIcon";

const ToolBar = () => {
  return (
    <div className="tool-bar w-80 h-20 flex justify-center items-center">
      <div className="bg-primary h-14 w-full rounded-full flex justify-start space-x-2 pl-2 items-center">

        {
          Tools.map((Tool, index) => {
            <ToolIcon key={index} name={Tool.name} />
          })
        }

      </div>
    </div>
  );
};

export default ToolBar;
