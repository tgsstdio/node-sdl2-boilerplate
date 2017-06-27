const NS = require('node-sdl2')
const App = NS.app;
const Window = NS.window;

let win;

function createWindow() {
  win = new Window({center:true, w:640, h:480});

  win.on('close', function() {
    App.quit();
  })
}

createWindow();

