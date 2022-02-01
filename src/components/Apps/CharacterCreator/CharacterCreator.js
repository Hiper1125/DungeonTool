import React from "react";
import ActionButton from "../../ToolWindow/ActionButton";
import ToolWindow from "../../ToolWindow/ToolWindow";

const CharacterCreator = () => {
  return (
    <ToolWindow
      name={"Character Builder"}
      title={"Create your Character"}
      subtile={""}
      view={<div></div>}
      actionButtons={[
        { name: "🠔", bold: true, disabled: true },
        { name: "+", bold: true },
        { name: "🠖", bold: true },
      ]}
    ></ToolWindow>
  );
};

export default CharacterCreator;
