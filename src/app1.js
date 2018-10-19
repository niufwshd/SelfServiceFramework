// var https = require('https');
// var qs = require('querystring');

// const param = qs.stringify({
//     'grant_type': 'client_credentials',
//     'client_id': 'WE17W8geTvHSuhu6CFoGeoVw',
//     'client_secret': 'b0oiBpD819j3qDOf0Xb8LBi3X11qsLb3'
// });

// https.get(
//     {
//         hostname: 'aip.baidubce.com',
//         path: '/oauth/2.0/token?' + param,
//         agent: false
//     },
//     function (res) {
//         // 在标准输出中查看运行结果
//         res.pipe(process.stdout);
//     }
// );


// var desktopIdle = require('desktop-idle');
// setInterval(function(){
//     console.log(desktopIdle.getIdleTime());
// },3000);var hook = require('../nkbhook.js');


// const hook = require('ll-keyboard-hook-win');
// let keyRegisterFn = (...args) => globalShortcut.register(...args);
// if (process.platform === 'win32') {
//     const hook = require('ll-keyboard-hook-win');
  
//     keyRegisterFn = (key, fn) => {
//       hook.on('down', key, fn);
//     };
//   }

// keyRegisterFn('133', (data) => {
//      console.log(data);
//   });
