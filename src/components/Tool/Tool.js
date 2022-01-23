import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ToolButton from "../ToolButton/ToolButton";
import ToolWindow from "../ToolWindow/ToolWindow";
import Monster from "../../assets/other/monster.png";

class Tool extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
  }

  sleep(ms) {
    ms *= 1000;
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async handleLoad() {
    var total = 0;
    var loadingBar = document.querySelector(".progress");
    var loader = document.querySelector(".loader");

    let freeze = (Math.random() * 40) + 20;
    let hasFreezed = false;

    while (total < 100) {
        await this.sleep(0.1);
        total += 5;
        loadingBar.style.width = total + "%";

        if(total > freeze && hasFreezed == false)
        {
          await this.sleep((Math.random() * 3) + 1);
          hasFreezed = true;
        }
    }

    await this.sleep(0.2);

    loader.classList.add("opacity-0");

    loadingBar.style.width = "50%";

    setTimeout(() => {
      loader.remove();
      document.querySelector(".tool").classList.remove("opacity-0");
    }, 500);
  }

  render() {
    return (
      <div className="tool h-screen w-screen relative overflow-hidden flex opacity-0">
        <img
          src={Monster}
          alt="monster"
          className="absolute right-0 h-[35rem] z-1 top-1/2 -translate-y-1/2 saturate-0 opacity-[0.1]"
        ></img>
        <Sidebar />
        <ToolWindow />
        <ToolButton />
      </div>
    );
  }
}

export default Tool;
