import React from "react";
import CharacterMenu from "./CharacterMenu";
import User from "./User";

const { ipcRenderer } = window.require("electron");

const Sidebar = () => {
  const user = ipcRenderer.sendSync("get-user");
  const username = `${user.username}#${user.discriminator}`;
  const userImage = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`;

  return (
    <div className="side-bar h-full w-72 bg-solidgray border-r border-solid border-r-primary border-opacity-25 z-[15]">
      <User username={username} image={userImage} />
      <CharacterMenu />
    </div>
  );
};

export default Sidebar;
