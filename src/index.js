// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
require('./common/libs.js');
require('./common/menu.js');

const { app, BrowserWindow } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title: 'mainWindow',
    resizable : false
  });

  mainWindow.maximize();
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // smalltalk.alert(process.cwd());
};

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

