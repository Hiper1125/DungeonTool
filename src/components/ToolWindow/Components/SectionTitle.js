import React from "react";

const SectionTitle = ({index, name, action}) => {
  return (
    <h1 className="section-title cursor-pointer" onClick={action}>
      {index}. {name}
    </h1>
  );
};

SectionTitle.defaultProps = {
  index: 0,
  name: "Section",
  action: () => {
    console.log("Section clicked");
  },
};

export default SectionTitle;
