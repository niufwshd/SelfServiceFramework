// const remote = require('electron').remote;
// const Menu = remote.Menu;
// const MenuItem = remote.MenuItem;

// //渲染进程
// const ipc = require('electron').ipcRenderer;

// var menu = new Menu.buildFromTemplate([
//     {
//         label: '菜单',
//         submenu: [
//             {
//                 label: '打开新窗口',
//                 click: function(){
//                     ipc.send('download-btn') //注册的指令。send到主进程index.js中。
//                 }
//             }
//         ]
//     }
// ])

// Menu.setApplicationMenu(menu);

//alert("hello2");