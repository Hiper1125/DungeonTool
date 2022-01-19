import React from "react";

const ToolIcon = ({name}) => {
  let icon = require(`../images/icons/${name}.png`);

  return <img src={icon} alt={name} className="items-center w-8 h-8" />;
};

export default ToolIcon;