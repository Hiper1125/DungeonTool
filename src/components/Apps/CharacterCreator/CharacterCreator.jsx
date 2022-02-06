import React from "react";
import ToolWindow from "../../ToolWindow/Window/ToolWindow";
import Navbar from "../../ToolWindow/Components/Navbar";

const CharacterCreator = () => {
  const titles = [
    { name: "basics", disabled: false },
    { name: "races", disabled: true },
    { name: "classes", disabled: true },
    { name: "talents", disabled: true },
    { name: "stats", disabled: true },
    { name: "story", disabled: true },
  ];

  return (
    <ToolWindow
      name={"Character Builder"}
      title={"Create your Character"}
      subtile={""}
      view={
        <div className="h-full w-full relative">
          <Navbar titles={titles} />
        </div>
      }
      actionButtons={[
        { name: "🠔", bold: true, disabled: true },
        { name: "＋", bold: true, disabled: true },
        { name: "🠖", bold: true, disabled: true },
      ]}
    />
  );
};

export default CharacterCreator;
