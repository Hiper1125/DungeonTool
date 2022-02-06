import React from "react";

const SectionTitle = ({ index, name, disabled, action }) => {
  let disabledClass;
  if (disabled === true) {
    disabledClass = "section-title cursor-not-allowed uppercase opacity-60";
  } else {
    disabledClass = "section-title cursor-pointer uppercase";
  }

  return (
    <div
      className={disabledClass}
      onClick={() => {
        if (!disabled) action();
      }}
    >
      <h1>
        {index}. {name}
      </h1>
    </div>
  );
};

SectionTitle.defaultProps = {
  index: 0,
  name: "Section",
  disabled: false,
  action: () => {
    alert("Section clicked");
  },
};

export default SectionTitle;