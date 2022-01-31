import React from "react";
import ActionButton from "../ToolWindow/ActionButton";
import ToolWindow from "../ToolWindow/ToolWindow";

const CharacterCreator = () => {
  return (
    <ToolWindow
      name={"Character Builder"}
      title={"Create your Character"}
      subtile={""}
      view={<h1 className=" text-primary text-xl">ciao</h1>}
      actionButtons={[
        <ActionButton name={"<-"} />,
        <ActionButton name={"+"} />,
        <ActionButton name={"->"} />,
      ]}
    ></ToolWindow>
  );
};

export default CharacterCreator;
