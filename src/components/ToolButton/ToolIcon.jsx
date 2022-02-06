import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import ToolTag from "./ToolTag";

//import ItemSearcher from "../Apps/ItemSearcher/ItemSearcher";

const ToolIcon = ({ name }) => {
  let icon = require(`../../assets/icons/${name}.png`);
  //const AppName = window.capitalize(name);
  //const App = require(`../Apps/${AppName}/${AppName}.js`);

  // TODO - dynamic import the right app
  const AppName = "ItemSearcher";
  const App = lazy(() => import(`../Apps/${AppName}/${AppName}`));

  return (
    <div className="tool-icon relative">
      <ToolTag name={window.capitalize(name)} />
      <img
        src={icon}
        alt={name}
        className="items-center w-8 h-8 cursor-pointer"
        onMouseEnter={(e) => {
          e.currentTarget.parentElement
            .getElementsByClassName("tool-tag")[0]
            .classList.remove("opacity-0");
        }}
        onMouseLeave={(e) => {
          e.currentTarget.parentElement
            .getElementsByClassName("tool-tag")[0]
            .classList.add("opacity-0");
        }}
        onClick={(e) => {
          ReactDOM.render(
            <Suspense fallback={<div>Loading...</div>}>
              <App />
            </Suspense>,
            document.getElementById("tool-content")
          );
        }}
      />
    </div>
  );
};

export default ToolIcon;
