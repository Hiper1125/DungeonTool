import React from "react";
import dice from '../images/dice.png'

const ToolButton = () => {
    return (
        <div className="tool-button rounded-full bg-primary w-20 h-20 absolute bottom-10 right-10 flex items-center justify-center">
          <img src={dice} alt="dice" className="items-center w-16 h-16" />
        </div>
    )
}

export default ToolButton;