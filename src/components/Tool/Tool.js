import Sidebar from "../Sidebar/Sidebar";
import ToolButton from "../ToolButton/ToolButton";
import Monster from "../../assets/other/monster.png";
import onTextShow from "../../sounds/text.mp3";
import onToolReady from "../../sounds/loaded.wav";
import { OnShow } from "@solariss/react-on-show";

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
          }, 500);
        },
      }}
    >
      <div className="tool h-screen w-screen relative overflow-hidden flex opacity-0">
        <img
          src={Monster}
          alt="monster"
          className="absolute right-0 h-[35rem] z-1 top-1/2 -translate-y-1/2 saturate-0 opacity-[0.1]"
        ></img>
        <Sidebar />
        <ToolButton />
      </div>
    </OnShow>
  );
};

export default Tool;
