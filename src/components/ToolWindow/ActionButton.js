import React from "react";
import PropTypes from "prop-types"; 

const ActionButton = ({ name, icon, action }) => {
  let iconImg = null;
  if (icon) {
    iconImg = <img src={require(`../../assets/icons/${icon}.png`)}/>
  }

  return (
    <div className="window-button h-12 w-32 bg-primary rounded-md flex flex-row justify-center items-center" onClick={action}>
      {iconImg}
      <h1 className="text-solidgray">{window.upperText(name)}</h1>
    </div>
  );
};

ActionButton.defaultProps = {
  name: "App",
  icon: false,
  action: () => {alert("Action Button Clicked")},
};

ActionButton.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  action: PropTypes.func,
};

export default ActionButton;