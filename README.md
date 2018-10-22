# SelfServiceClient

一个通用的自助服务客户端框架，此项目是在[Angular Electron](https://angularfirebase.com/lessons/desktop-apps-with-electron-and-angular/)的基础上扩展而来
## 支持的功能
1.全屏并总是在其他窗口前面  
2.esc和alt+f4不能关闭，支持alt+f4密码退出  
3.支持空闲时间统计，当到达一定的时间段后可以弹出广告窗口  
4.广告窗口支持图片和视频的混播跑马灯，视频会自动播放适合无人值守的自助终端场景，当手触屏后广告退出。  
5.支持angular2以上版本，集成了ng-bootstrapUI库和ngzorro组件库  
6.支持嵌入任何web站点  
7.支持安装包一键安装  
8.支持electron支持的所有其他功能  

## Basic Usage
1.克隆代码库  
  git clone  
  cd SelfServiceFramework  
2. 安装 yarn   
   参考https://yarnpkg.com/en/docs/install#windows-stable  
3. 安装node-gyp  
   $ npm install -g node-gyp  
4. 安装 electron-builder  
   yarn add electron-builder --dev  
   参考https://github.com/nodejs/node-gyp  
5. 安装    
    npm install  
6. 构建应用  
   npm run electron-build  


# Lessons and Screencasts

Learn how to bulid this [Angular Electron](https://angularfirebase.com/lessons/desktop-apps-with-electron-and-angular/) project step-by-step. 
## 打包过程
## 1.安装electron-builder
  yarn add electron-builder --dev
## 2.安装yarn
   参考https://yarnpkg.com/en/docs/install#windows-stable
##  3.首先在package.json的scripts部分增加
 "pack": "electron-builder --dir",  
 "dist": "electron-builder"  
##  4.在package.json 增加build节点
"build": {  
    "appId": "selfHelp.Terminal",  
    "electronVersion": "2.0.7",  
    "win": {  
      "target": "nsis",  
      "icon" : "src/assets/img/logo.ico"  
    },  
     "directories": {  
      "output": "release",  
      "app": "."  
    }  
  }  
  注意打包需要256x256的ico文件。  
## 5. 打包填坑亲历 
   1. 如果出现electron-xxx.zip(xxx位版本号)不能下载，请手动下载electron-xxx.zip
   或者从电脑的C:\Users\Think\.electron(think是我的当前用户名）    
   拷贝electron-xxx.zip和SHASUMS256.txt-xxx的文件到C:\Users\Think\AppData\Local\electron\Cache  
   目录。文件夹名称要和build输出的目录路径保持一致。  
   2. 如果electron-xxx.zip(xxx位版本号)不能下载，electron_builder打包还需要electron-builder打包也需要两个文件：  
   winCodeSign和nsis以及nsis resource  
   如果这两个文件也没有下载下来，按照如下步骤操作：  
   下载wincodesign包，链接：https://github.com/electron-userland/electron-builder-binaries/releases  
   选择Source code (zip)下载并解压，里面已经包含nsis    
   在%LOCALAPPDATA%（C:\Users\Think\AppData\Local）目录下新建electron-builder\cache\，正常情况下目录是存在的。
   将Source code (zip)解压后的文件拷贝到C:\Users\Think\AppData\Local\ electron-builder\cache\下  
   下载的链接信息build输出信息中会给出，可参考如下格式  
   https://github.com/electron-userland/electron-builder-binaries/releases/tag/winCodeSign-1.9.0 ，  
   https://github.com/electron-userland/electron-builder-binaries/releases/tag/nsis-resources-3.0.0 
   3. 如果出现 sprawn "C:\Users\Think\AppData\Local\electron\Cache\winCodeSign\winCodeSign-2.3.1\rcedit-x64.exe" 错误
      请查看C:\Users\Think\AppData\Local\electron\Cache\winCodeSign\winCodeSign-2.3.1\winCodeSign目录，rcedit-x64.exe在我的这个目录下，
      拷贝到build信息提示的C:\Users\Think\AppData\Local\electron\Cache\winCodeSign\winCodeSign-2.3.1\下，再次build通过。  
   至此配置完成，打包不会报错。  
## 6. 在powershell的cmd中cd到package.json所在目录运行 yarn dist
   可以在项目的release目录下看到生成的安装包setup文件,以及win-unpacked（windows平台）下所有的其他文件，至此打包完成。
   
##  参考链接:
   1.https://blog.csdn.net/bailong1/article/details/78657605  
   2.https://www.electron.build/  
   3.https://github.com/electron-userland/electron-builder  
   

