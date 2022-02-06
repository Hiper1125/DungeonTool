import React from "react";

const LoadingBar = () => {
  return (
    <div className="loading-bar h-3 w-64 absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray rounded-full overflow-hidden">
      <div className="progress h-full bg-primary rounded-r-full transition-all" style={{width: 0}}></div>
    </div>
  );
};

export default LoadingBar;
