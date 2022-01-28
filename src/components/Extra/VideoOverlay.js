import React from "react";

const VideoOverlay = ({fileName}, {opacity}) => {
    let source = require('../../assets/other/' + fileName + ".mp4");

  return (
    <div className="absolute h-screen w-screen mix-blend-screen">
        <video className="h-screen w-screen object-cover" autoPlay={true} muted={true} loop={true} src={source}>
        </video>
    </div>
  );
};

VideoOverlay.defaultProps = {
  opacity: 1,
};

export default VideoOverlay;