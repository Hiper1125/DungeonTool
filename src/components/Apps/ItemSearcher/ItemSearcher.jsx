import React from "react";
import ToolWindow from "../../ToolWindow/Window/ToolWindow";
import Navbar from "../../ToolWindow/Components/Navbar";

const ItemSearcher = () => {
  return (
    <ToolWindow
      name={"Item Searcher"}
      title={"Search Item"}
      subtile={""}
      view={
        <div className="h-full w-full relative flex flex-col justify-center items-center">
          <h1 className="text-[#8F8F8F] text-center mx-12 mt-2">Write here the name of the item to search, can be anything</h1>
          <textarea type="text" className="w-[90%] h-full my-4 bg-lighter text-[#909090] outline-none focus:outline-none p-2" placeholder="Item name" style={{resize: "none"}}></textarea>
        </div>
      }
      actionButtons={[
        { name: "Search"},
      ]}
      width={"30rem"}
      height={"30rem"}
    />
  );
};

export default ItemSearcher;