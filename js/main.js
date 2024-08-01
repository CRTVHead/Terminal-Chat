import { init } from './init.js';
import { initCursor } from './terminal/cursor.js';
import { handleClick, globalListener } from './handlers/globalHandlers.js';
import "https://cdn.jsdelivr.net/npm/comfy.js@latest/dist/comfy.min.js";
import { handleChat } from './handlers/TwitchChatHandler.js';

var ready = true;
var queue = [];

ComfyJS.onChat = async (user, message, flags, self, extra) => {
  var data = [user, message, flags, self, extra];

  if (ready){
    sendChat(user, message, flags, self, extra);
  } else{
    queue.push(data);
  }

  console.log(user, message);
}

async function sendChat(user, message, flags, self, extra){
  ready = false;
  await handleChat(user, message, flags, self, extra);
  await readyUp();
}

function readyUp()
{
  ready = true
  if (queue.length > 0){
    var data = queue.shift()
    sendChat(data[0], data[1], data[2], data[3],data[4]);
  }
}

// document.addEventListener("DOMContentLoaded", init);
initCursor();
ComfyJS.Init( "CRTVhead" );
