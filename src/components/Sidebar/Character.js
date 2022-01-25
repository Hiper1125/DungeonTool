import React from "react";
import CharacterImage from "./CharacterImage";

const Character = ({ character }) => {
  return (
    <div className="character h-14 w-full px-5 my-2 flex items-center">
      <CharacterImage image={character.image} level={2} exp={25} />  {/* TODO Aggiungere formula per calcolo EXP */}
      <div className="character-info ml-2">
        <h4 className="character-name">{character.name}</h4>
        <h5 className="character-tag">{character.tag}</h5>
      </div>
    </div>
  );
};

Character.defaultProps = {
  character: {
    name: "Character Name",
    tag: "Character Tag",
    image: "",
    exp: 0
  },
};

export default Character;
