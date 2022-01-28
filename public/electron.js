const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const ds = require("./js/discord.js");
const db = require("./js/database.js");

createWindow = () => {
  const toolWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true,
    resizable: false,
    icon: __dirname + "/favicon.ico",
  });

  ds.connect().then(() => {
    toolWindow.loadURL(
      isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );

    if (isDev) {
      toolWindow.webContents.openDevTools({ mode: "detach" });
    }
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
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

ipcMain.on("get-user", async (event, arg) => {
  event.returnValue = await ds.getUser();
});

ipcMain.on("tool-loaded", async (event, arg) => {
  startTimestamp = ds.getTimeSinceStart();

  event.returnValue = await ds.setActivity({
    details: "Dungeon Tool",
    state: "Idling on the client",
    largeImageKey: "tool",
    startTimestamp,
    instance: true,
  });
});