import Sidebar from "./components/Sidebar";
import ToolButton from "./components/ToolButton";

function App() {
  return (
    <div className="App h-screen w-screen relative overflow-hidden flex">
      <Sidebar />
      <ToolButton />
    </div>
  );
}

export default App;
