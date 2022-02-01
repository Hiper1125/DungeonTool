import React from "react";
import ToolWindow from "../../ToolWindow/Window/ToolWindow";
import Navbar from "../../ToolWindow/Components/Navbar";

const CharacterCreator = () => {
  const titles = [{ name: "ciao" }, { name: "ciao" }];

  return (
    <ToolWindow
      name={"Character Builder"}
      title={"Create your Character"}
      subtile={""}
      view={
        <div className="h-full w-full relative">
          <Navbar
            titles={titles}
          />
        </div>
      }
      actionButtons={[
        { name: "🠔", bold: true, disabled: true },
        { name: "＋", bold: true },
        { name: "🠖", bold: true },
      ]}
    />
  );
};

export default CharacterCreator;