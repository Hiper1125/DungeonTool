import React from "react";
import ToolTag from "./ToolTag";

const ToolIcon = ({ name }) => {
  let icon = require(`../images/icons/${name}.png`);
  
  return (
    <div className="tool-icon">
      <ToolTag name={window.upperText(name)}/>
      <img src={icon} alt={name} className="items-center w-8 h-8 cursor-pointer" />
    </div>
  );
};

export default ToolIcon;