import { app, BrowserWindow, Menu, MenuItemConstructorOptions, nativeImage, shell } from "electron";
import * as path from "path";
import * as url from "url";
import isDev from "electron-is-dev";
import debug from 'electron-debug';
import { autoUpdater } from 'electron-updater';

import i18n from '../i18n';
import {
  getWindowBounds,
  setWindowBounds
} from '../src/utils/windowBoundsController'


if(isDev){
  debug()
}

let mainWindow: BrowserWindow | null;

function createWindow() {
  
  const icon = nativeImage.createFromPath(`${app.getAppPath()}/build/icon.png`)

  if (app.dock) {
    app.dock.setIcon(icon)
  }

  mainWindow = new BrowserWindow({
    ...getWindowBounds(),
    icon,
    width: 1000,
    height: 700,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
  });

  mainWindow.loadURL(
    isDev ? 'http://localhost:4000' :   url.format({
      pathname: path.join(__dirname, 'renderer/index.html'),
      protocol: 'file:',
      slashes: true
    }),
  )

  mainWindow.on('close', () => {
    mainWindow && setWindowBounds(mainWindow.getBounds())
  })

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

async function createMenu() {
  await i18n.loadNamespaces('applicationMenu')

  const template: MenuItemConstructorOptions[] = [
    {
      label: 'Sobre',
      click: () => {
        shell.openExternal('https://github.com/brunofamiliar/aroca/')
      }
    },
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

app.on('ready', () => {
  createWindow(),
  autoUpdater.checkForUpdatesAndNotify()
  createMenu()
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});