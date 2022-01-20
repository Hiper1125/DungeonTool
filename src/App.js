import Sidebar from "./components/Sidebar/Sidebar";
import ToolButton from "./components/ToolButton/ToolButton";
import ToolWindow from "./components/ToolWindow/ToolWindow";
import Monster from "./images/assets/monster.png"

function App() {
  return (
    <div className="App h-screen w-screen relative overflow-hidden flex">
      <img src={Monster} className="absolute right-0 h-[35rem] z-1 top-1/2 -translate-y-1/2 saturate-0 opacity-[0.1]"></img>
      <Sidebar />
      <ToolWindow/>
      <ToolButton />
    </div>
  );
}

export default App;
