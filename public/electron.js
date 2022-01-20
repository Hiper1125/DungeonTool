const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

const path = require("path");

const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });
const { clientId } = require("../config.json");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    /*    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },*/
    autoHideMenuBar: true,
    resizable: false,
    icon: __dirname + "/favicon.ico",
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // Discord
  discordRPC();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const discordRPC = () => {
  let gameActivity = {
    details: "Campaign Name",
    state: "Playing as a role here",
    assets: {
      large_image: "game",
      large_text: "ERPG :copyright: 2022",
    },
    party: {
      size: [1, 5],
      id: "1038919083913",
    },
    secrets: {
      match: "381371838",
      join: "89482748",
    },
    timestamps: { start: Date.now() },
    instance: true,
  };

  client.on("ready", async () => {
    client.request("SET_ACTIVITY", {
      pid: process.pid,
      activity: gameActivity,
    });
    console.log("Client Ready.");
  });
  client.on("connected", async () => {
    console.log("RPC Connected.");
  });

  client.login({ clientId: clientId });
};
