import React from "react";
import CharacterMenu from "./CharacterMenu";
import User from "./User";

const Sidebar = () => {
  return (
    <div className="side-bar h-full w-72 border-r border-solid border-r-primary border-opacity-25">
      <User />
      <CharacterMenu />
    </div>
  );
};

export default Sidebar;
