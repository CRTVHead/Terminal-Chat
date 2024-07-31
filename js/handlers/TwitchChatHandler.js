import { animateText } from '../terminal/terminal.js';
import { scrollToBottom } from './utils.js';

let commandHistory = [];
let commandIndex = -1;

export async function handleChat(user, message, flags, self, extra) {
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
    await animateText(newOutputLine, (user + 'send chat:') , 10, terminalInput, inputPrefix);
  }

  await animateText(newOutputLine, message, 20, terminalInput);
  scrollToBottom();
}

async function handleReward(user, reward, cost, extra) {
  
}

async function handleCommand(user, command, message, flags, extra){
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
    await animateText(newOutputLine, (user + 'EXECUTE PROTOCOL') , 10, terminalInput, inputPrefix);
  }

  await animateText(newOutputLine, command, 20, terminalInput);
  scrollToBottom();
}
