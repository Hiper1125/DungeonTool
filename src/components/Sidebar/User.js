import React from "react";
const { ipcRenderer } = window.require('electron');

const User = ({ username, image }) => {
  const user = ipcRenderer.sendSync('get-user');

  return (
    <div className="user h-auto w-full p-4 flex items-center border-b border-solid border-b-primary border-opacity-10">
      <div className="user-image h-16 w-16 p-1 border-2 boredr-solid border-primary rounded-full">
        <img className="h-full w-full rounded-full" src={"https://cdn.discordapp.com/avatars/" +
    user.id +
    "/" +
    user.avatar} alt="" />
      </div>
      <h2 className="user-name ml-2">{user.username}</h2>
    </div>
  );
};

User.defaultProps = {
  username: window.localStorage.getItem("userName"),
  image:
    "https://cdn.discordapp.com/avatars/" +
    window.localStorage.getItem("userId") +
    "/" +
    window.localStorage.getItem("userAvatar"),
};

export default User;
