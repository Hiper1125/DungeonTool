import React from "react";

const LoadingBar = () => {
  return (
    <div className="loading-bar h-5 w-64 absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray rounded-full overflow-hidden">
      <div className="progress h-full w-0 bg-primary rounded-r-full transition-all"></div>
    </div>
  );
};

export default LoadingBar;
