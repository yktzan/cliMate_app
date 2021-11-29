How to setup the project

 1. follow this url to setup react native enviroment in your mac/pc if you haven done it. 

 choose on tab React Native CLI Quickstart

 https://reactnative.dev/docs/environment-setup

2. Open the project in VSCode 

3. On the Terminal(mac) / Powershell or cmd(window) and run command "npm install" to install the node_modules

For iOS

1. run "npx pod-install" to install the cocoaPod lib. 
if "npx pod install" fail to run, you may run "cd ios" followed by "pod install"

2. To run it on a stimulator, run "react-native run-ios"  

3. To run it on a iOS device, connect an iPhone to your mac and run "react-native run-ios --device"

4. To run it on release mode on iOS device, run "react-native run-ios --device --configuration Release"

For Android
1. To run it on a simulator, open an AVD android simulator and run "react-native run-android"

2. To run it on an android device, connect an android device to your pc/mac and and run "react-native run-android"

3. To run it on an android device on release mode, run "react-native run-android --variant=Release"



