const { app, BrowserWindow, session } = require("electron");
const { sessionStorage } = require("electron-browser-storage");
const isDev = require("electron-is-dev");
const path = require("path");
const ds = require("./js/discord.js");

createWindow = () => {
  // Create the browser window.
  const toolWindow = new BrowserWindow({
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
  toolWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Open the DevTools.
  if (isDev) {
    toolWindow.webContents.openDevTools({ mode: "detach" });
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  ds.connect().then(async (user) => {
    console.log("[RPC]: " + user.id);

    sessionStorage.setItem("user", user).then(() => {
      console.log(sessionStorage.getItem("user"));
    });
  });
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