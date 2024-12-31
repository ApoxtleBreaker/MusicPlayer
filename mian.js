const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 1080,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // 加载你的网页（可以是本地的 HTML 文件或远程网址）
    // win.loadURL('https://your-website.com'); // 替换为你的网页地址
    win.loadFile('app.html'); // 如果是本地文件，可以使用这行替代
}

app.whenReady().then(createWindow);

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
