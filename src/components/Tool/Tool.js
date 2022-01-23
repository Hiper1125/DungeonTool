import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ToolButton from "../ToolButton/ToolButton";
import ToolWindow from "../ToolWindow/ToolWindow";
import Monster from "../../images/assets/monster.png";

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
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async handleLoad() {
    var total = 0;
    var loadingBar = document.querySelector(".progress");
    var loader = document.querySelector(".loader");

    while (total < 100) {
        var time = Math.random() * 500;

        await this.sleep(time);

        total += time / 50;
        loadingBar.style.width = total + "%";
    }

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
