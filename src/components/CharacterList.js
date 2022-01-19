import React from "react";
import Character from "./Character";

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list h-full w-full">
      {characters.map((character) => 
        <Character
          key={character.id}
          name={character.name}
          tag={character.tag}
        />
      )}
    </div>
  );
};

export default CharacterList;
