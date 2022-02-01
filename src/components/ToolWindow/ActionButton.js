import React from "react";
import PropTypes from "prop-types";

const ActionButton = ({ name, bold, disabled, icon, action }) => {
  let iconImg = null;
  if (icon) {
    iconImg = <img src={require(`../../assets/icons/${icon}.png`)} alt="" />;
  }

  let windowClass;
  if(disabled === true) {
    windowClass = "window-button cursor-not-allowed h-12 w-32 bg-primary rounded-md flex flex-row justify-center items-center opacity-10";
  }
  else {
    windowClass = "window-button cursor-pointer h-12 w-32 bg-primary rounded-md flex flex-row justify-center items-center";
  }

  let textClass;
  if (bold === true) {
    textClass = "text-solidgray text-3xl font-bold";
  } else {
    textClass = "text-solidgray";
  }

  return (
    <div
      className={windowClass}
      onClick={() => {
        if (!disabled) action();
      }}
    >
      {iconImg}
      <h1 className={textClass}>{window.upperText(name)}</h1>
    </div>
  );
};

ActionButton.defaultProps = {
  name: "Button",
  icon: false,
  bold: false,
  disabled: false,
  action: () => {
    alert("Action button clicked");
  },
};

ActionButton.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  bold: PropTypes.bool,
  disabled: PropTypes.bool,
  action: PropTypes.func,
};

export default ActionButton;