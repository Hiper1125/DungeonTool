import React from "react";
import FogSource from "../../assets/other/fog.mp4";

const Fog = () => {
  return (
    <div className="fog h-screen w-screen mix-blend-screen object-cover z-[1]">
        <video className="h-full w-full" autoPlay={true} muted={true} loop={true} src={FogSource}>
        </video>
    </div>
  );
};

export default Fog;
