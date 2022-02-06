import React from "react";
import CharacterList from "./CharacterList";
import CharIcon from "./CharIcon";

const CharacterMenu = ({ characters }) => {
  return (
    <div className="character-menu h-full w-full">
        <div className="characters-top h-8 w-full px-2 flex justify-between items-center">
            <h3>CHARACTERS</h3>
            <div className="characters-options flex space-x-1">
                <CharIcon name="add" />
                <CharIcon name="sort" />
                <CharIcon name="search" />
            </div>
        </div>
        <CharacterList characters={characters} />
    </div>
  );
};

CharacterMenu.defaultProps = {
    characters: [
        {
            id: 1,
            name: "Character Name",
            tag: "Character Tag",
            image: "",
        },
    ],
};

export default CharacterMenu;
