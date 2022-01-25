import React from "react";

const WindowButton = ({ name, action }) => {
  let icon = require(`../../assets/icons/${name}.png`);
  
  return (
    <div className="window-button h-3 w-3 p-[1px] bg-primary rounded-full" onClick={action}>
      <img className="h-auto w-auto" src={icon} alt=""/>
    </div>
  );
};

export default WindowButton;