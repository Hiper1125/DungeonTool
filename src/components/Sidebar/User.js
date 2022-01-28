import React from "react";

const User = ({ username, image }) => {
  return (
    <div
      className="user h-auto w-full p-4 flex items-center border-b border-solid border-b-primary border-opacity-10"
      onMouseOver={(e) => (e.currentTarget.getElementsByClassName("ds-image").src = image)}
      onMouseOut={(e) => (e.currentTarget.getElementsByClassName("ds-image").src = image + ".jpg")}
    >
      <div className="user-image h-16 w-16 p-1 border-2 boredr-solid border-primary rounded-full">
        <img
          className="ds-image h-full w-full rounded-full"
          src={image + ".jpg"}
          alt=""
        />
      </div>
      <h2 className="user-name ml-2">{username}</h2>
    </div>
  );
};

User.defaultProps = {
  username: "Username",
  image: "",
};

export default User;
