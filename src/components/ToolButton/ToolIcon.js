import React from "react";
import ToolTag from "./ToolTag";

const ToolIcon = ({ name }) => {
  let icon = require(`../../images/icons/${name}.png`);

  return (
    <div
      className="tool-icon relative"
      onMouseEnter={(e) => {
        e.currentTarget.getElementsByClassName("tool-tag")[0].classList.remove("opacity-0");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.getElementsByClassName("tool-tag")[0].classList.add("opacity-0");
      }}
    >
      <ToolTag name={window.upperText(name)} />
      <img
        src={icon}
        alt={name}
        className="items-center w-8 h-8 cursor-pointer"
      />
    </div>
  );
};

export default ToolIcon;
