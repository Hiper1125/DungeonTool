import React from "react";
import PropTypes from "prop-types"; 

const ToolView = (content) => {
  return (
    <div className="window-view relative h-full w-[85%] bg-gray border-primary border-[0.1rem] border-opacity-[0.02]">
    
    </div>
  );
};

ToolView.defaultProps = {
  content: null,
};

ToolView.propsTypes = {
  content: PropTypes.element,
}

export default ToolView;