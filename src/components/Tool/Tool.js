import Sidebar from "../Sidebar/Sidebar";
import ToolButton from "../ToolButton/ToolButton";
import VideoOverlay from "../Extra/VideoOverlay";
import onTextShow from "../../sounds/text.mp3";
import onToolReady from "../../sounds/loaded.wav";
import { OnShow } from "@solariss/react-on-show";
import CharacterCreator from "../Apps/CharacterCreator/CharacterCreator.js";
const {ipcRenderer} = window.require("electron");

const Tool = () => {
  const sleep = (ms) => {
    ms *= 1000;
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <OnShow
      handlers={{
        enter: async () => {
          var total = 0;
          var loadingBar = document.querySelector(".progress");
          var loader = document.querySelector(".loader");

          let freeze = Math.random() * 40 + 20;
          let hasFreezed = false;

          var audioText = new Audio(onTextShow);
          var audioTool = new Audio(onToolReady);

          audioText.volume = 0.1;
          audioTool.volume = 0.3;

          await sleep(0.15);
          audioText.play();
          await sleep(0.85);

          document.querySelector(".loading-bar").classList.add("active");

          await sleep(0.85);

          while (total < 100) {
            await sleep(0.1);
            total += 5;
            loadingBar.style.width = total + "%";

            if (total > freeze && hasFreezed === false) {
              await sleep(Math.random() * 2 + 1);
              hasFreezed = true;
            }
          }

          await sleep(0.2);

          audioTool.play();

          loader.classList.add("opacity-0");

          loadingBar.style.width = "50%";

          setTimeout(() => {
            loader.remove();
            document.querySelector(".tool").classList.remove("opacity-0");
            ipcRenderer.sendSync("tool-loaded");
          }, 500);
        },
      }}
    >
      <div className="tool h-screen w-screen relative overflow-hidden flex opacity-0 z-10">
        <Sidebar />
        <ToolButton />
        <CharacterCreator></CharacterCreator>
        <VideoOverlay fileName={"fog"} opacity={0.1}/>
        <VideoOverlay fileName={"dust"} opacity={0.05}/>
      </div>
    </OnShow>
  );
};

export default Tool;