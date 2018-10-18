
const { app, BrowserWindow, ipcMain } = require('electron');
const { download } = require('electron-dl');
const hook = require('ll-keyboard-hook-win');
const ipc = require('electron').ipcMain;
const prompt = require('electron-prompt');


let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`,
    alwaysOnTop:true,
    fullscreen:true
  })

  win.setMenu(null);
  win.loadURL(`file://${__dirname}/dist/index.html`)



  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {

    win = null
  })


  ipc.on('download-btn', (e, args) => {
    download(BrowserWindow.getFocusedWindow(), 'http://n.sinaimg.cn/news/transform/700/w1000h500/20180822/oW90-hhzsnea7619462.jpg')
      .then(dl => console.log(dl.getSavePath()))
      .catch(console.error);
  });

  var presWindow = new BrowserWindow({
    width: 300,
    height: 300,
    show: false
  })

  presWindow.loadURL('file://' + __dirname + '/presWindow.html') //新窗口
  ipc.on('download-btn', function () {
    presWindow.show()
  })

  win.on('close', (e) => {

    // swal({
    //       title: 'Enter your password',
    //       input: 'password',
    //       inputPlaceholder: 'Enter your password',
    //       inputAttributes: {
    //         maxlength: 10,
    //         autocapitalize: 'off',
    //         autocorrect: 'off'
    //       }
    //     }).then((result) => {

    //     if (result && result == '111111') {
    //       swal('Entered password: ' + password)
    //       e.returnValue = true;
    //     } else {
    //       e.preventDefault();
    //     }
    e.preventDefault();
    prompt({
      title: '退出',
      label: '管理员密码:',
      value: '请输入密码',
      alwaysOnTop:true,
      inputAttrs: {
        type: 'text'
      }
    })
      .then((r) => {
        if (r === null) {
          console.log('user cancelled');
        } else if (r == '111111') {
          e.returnValue = true;
          win.destroy();
        }
      })
      .catch(console.error);
  });
}
// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
