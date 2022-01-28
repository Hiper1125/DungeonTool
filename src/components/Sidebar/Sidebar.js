import React from "react";
import CharacterMenu from "./CharacterMenu";
import User from "./User";

const Sidebar = () => {
  return (
    <div className="side-bar h-full w-72 bg-solidgray border-r border-solid border-r-primary border-opacity-25 z-[15]">
      <User />
      <CharacterMenu />
    </div>
  );
};

export default Sidebar;
