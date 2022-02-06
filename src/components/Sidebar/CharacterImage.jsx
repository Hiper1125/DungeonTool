import React from "react";

const CharacterImage = ({ image, level, exp }) => {
  return (
    <div
      className="character-image h-14 w-14 p-0.5 relative border border-solid border-primary rounded-full"
      style={{
        background: `conic-gradient(#4B4B4B ${exp * 3.6}deg, 
                                    #111111 ${exp * 3.6}deg)`,
      }}
    >
      <img
        className="border h-full w-full bg-solidgray border-solid border-primary rounded-full"
        src={image}
        alt=""
      />
      <div className="level hexagon h-3 w-6 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 border border-solid border-primary bg-primary">
        <div className="hexagon h-full w-full bg-solidgray flex justify-center items-center">
          <p>{level}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterImage;
