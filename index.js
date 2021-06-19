const { app, BrowserWindow, Menu } = require('electron');



const createWindow = () =>
{
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        frame: true,
        title: "Hello Electron",
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    });
    win.loadFile('front/index.html');
    win.webContents.openDevTools();


};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length){
        createWindow();
    }
});