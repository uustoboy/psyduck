const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev');
function createWindow () {   
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 900,
    height: 556,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const urlLocation = isDev ? 'http://localhost:3000/' : 'dummyurl';
  console.log(urlLocation);
  // 加载index.html文件
  
  if(isDev){
      console.log(2);
  	  // 打开开发者工具
  		win.webContents.openDevTools();
      win.loadURL(urlLocation);
  }else{
      console.log(1);
    win.loadFile(urlLocation);
  }
}

app.whenReady().then(createWindow)