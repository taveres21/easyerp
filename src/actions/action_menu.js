const { app, BrowserWindow } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindowMenu = () => {

    dimensions = windowSize();

    const menuWindow = new BrowserWindow({
        height : dimensions[0],
        width  : dimensions[1],
        resizable : false
    });
    
    menuWindow.loadFile(path.join(process.cwd(), `/views/view_${menuItem}.html`));
};

const windowSize = (menuItem) => {
    
    dimensions = [];

    switch(menuItem) {
        case 'cliente':
          dimensions[0] = 800;
          dimensions[1] = 800;
          break;    
        case 'funcionario':
          dimensions[0] = 1000;
          dimensions[1] = 1000;
          break; 
    }

    return dimensions;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindowMenu(menuItem);
  }
});

