import Loader from "./components/Loading/Loader";
import Tool from "./components/Tool/Tool";

function App() {
  return (
    <div className="App h-screen w-screen relative overflow-hidden bg-darker">
      <Loader />
      <Tool />
    </div>
  );
}

export default App;
