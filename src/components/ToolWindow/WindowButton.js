import React from "react";

const WindowButton = ({ name }) => {
  let icon = require(`../../images/icons/${name}.png`);
  
  return (
    <div className="window-button h-3 w-3 p-[1px] bg-primary rounded-full">
      <img className="h-auto w-auto" src={icon}/>
    </div>
  );
};

export default WindowButton;