import React from "react";
import ToolWindow from "../../ToolWindow/Window/ToolWindow";
import Navbar from "../../ToolWindow/Components/Navbar";

const ItemVisualizer = () => {
  const titles = [
    { name: "basics", disabled: false },
    { name: "races", disabled: true },
  ];

  return (
    <ToolWindow
      name={"Item Visualizer"}
      title={"Item name"}
      subtile={""}
      view={
        <div className="h-full w-full relative">
          <Navbar titles={titles} />
        </div>
      }
      actionButtons={[
        { name: "🠔", bold: true, disabled: true },
        { name: "＋", bold: true, disabled: true },
        { name: "🠖", bold: true, disabled: true },
      ]}
    />
  );
};

export default ItemVisualizer;