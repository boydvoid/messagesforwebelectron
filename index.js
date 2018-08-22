const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

let mainWindow;

// listen for app to be ready 
app.on('ready', function () {
    //create new window
    //load html file
    
        mainWindow = new BrowserWindow({
            minWidth: 1280,
            minHeight: 800,
            width: 1280,
            height: 800,
            title: "Android Messages For Desktop"
            
        });
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }));

});

