import React from "react";

const Character = ({ name, tag, image }) => {
  return (
    <div className="character h-14 w-full px-5 my-2 flex items-center">
      <div className="character-image h-14 w-14 p-1 border-2 border-solid border-primary rounded-full">
        <img className="h-full w-full rounded-full" src={image} alt="" />
      </div>
      <div className="character-info ml-2">
        <h4 className="character-name">{name}</h4>
        <h5 className="character-tag">{tag}</h5>
      </div>
    </div>
  );
};

Character.defaultProps = {
  name: "Character Name",
  tag: "Character Tag",
  image: "",
};

export default Character;
