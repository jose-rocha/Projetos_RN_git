const { app, BrowserWindow } = require("electron");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({});

  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

const electron = require("electron");

// Enable live reload for all the files inside your project directory
electron: require(`${__dirname}/node_modules/electron`);
require("electron-reload")(__dirname);
