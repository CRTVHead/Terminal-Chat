import { animateEmote, animateText } from '../terminal/terminal.js';
import { scrollToBottom } from './utils.js';

let commandHistory = [];
let commandIndex = -1;

export async function handleChat(user, message, flags, self, extra) {
  const terminalOutput = document.getElementById("terminal-output");
  const terminalInput = document.getElementById("terminal-input");
  const newOutputDiv = document.createElement("div");
  terminalOutput.appendChild(newOutputDiv);

  commandHistory.push(message);
  commandIndex = commandHistory.length;
  //terminalOutput.appendChild(newOutputLine);

  const inputPrefix = document.getElementById("input-prefix");
  var newOutputSpan = document.createElement("span");
  newOutputDiv.appendChild(newOutputSpan)

  newOutputSpan.textContent += inputPrefix.textContent
  var text = user + ` | SEND CHAT:
    
  `

  await animateText(newOutputDiv, text, 10);

  var i = 0;

  // Sort Emotes
  if (extra.messageEmotes){
    var sorted_emotes = sort_emotes(extra.messageEmotes)
  
    // Inject Emotes
    for(const emote of sorted_emotes){
      var start = emote[1];
      var end = emote[2];
      await animateText(newOutputDiv, message.slice(i, start), 10)
      await animateEmote(newOutputDiv, `https://static-cdn.jtvnw.net/emoticons/v2/` + emote[0] + `/default/light/1.0`)
      i = parseInt(end)+1;
    };
  }
  text = message.slice(i) + `
  ...............................................
  `

  await animateText(newOutputDiv, text, 10)

  scrollToBottom();
}

async function handleReward(user, reward, cost, extra) {

}

async function handleCommand(user, command, message, flags, extra) {
  const terminalOutput = document.getElementById("terminal-output");
  const terminalInput = document.getElementById("terminal-input");
  const newOutputLine = document.createElement("div");
  terminalOutput.appendChild(newOutputLine);

  commandHistory.push(message);
  commandIndex = commandHistory.length;

  if (inputText.length > 0) {
    terminalOutput.appendChild(newOutputLine);

    const inputPrefix = document.getElementById("input-prefix");
    newOutputLine.textContent += inputPrefix.textContent
    await animateText(newOutputLine, (user + 'EXECUTE PROTOCOL'), 10, terminalInput, inputPrefix);
  }

  await animateText(newOutputLine, command, 20, terminalInput);
  scrollToBottom();
}

function sort_emotes(obj) {
  var items = Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
  var result = []

  items.forEach((item =>{
    for (var i of item[1]){
      result.push([item[0],i.split('-')[0], i.split('-')[1]])
    }
  }

  ))

  result.sort(function (first, second) {
    return first[1] - second[1];
  });
  return (result)
}