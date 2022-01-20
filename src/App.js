import Sidebar from "./components/Sidebar";
import ToolButton from "./components/ToolButton";
import Monster from "./images/assets/monster.png"

function App() {
  return (
    <div className="App h-screen w-screen relative overflow-hidden flex">
      <img src={Monster} className="absolute right-0 h-[35rem] top-1/2 -translate-y-1/2 saturate-0 opacity-[0.1]"></img>
      <Sidebar />
      <ToolButton />
    </div>
  );
}

export default App;
