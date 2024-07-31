import { scrollToBottom } from './utils.js';

export function handleClick(event) {
  if (event) {
    event.preventDefault();
  }
  let input = document.querySelector("[contenteditable='true']");
  if (input) {
    input.focus();
  }

  const terminalOutput = document.getElementById("terminal-output");
  const isScrolledToBottom =
    terminalOutput.scrollHeight - terminalOutput.clientHeight <=
    terminalOutput.scrollTop + 1;

  if (isScrolledToBottom) {
    scrollToBottom();
  }

  // Only allow click events that originated from within the terminal container
  if (event.target.closest(".terminal") !== null) {
    event.stopPropagation();
  }

  // Set focus back to the input field
  setTimeout(() => {
    input.focus();
  }, 0);
}
  
export function globalListener(event) {
  const keyCode = event.keyCode;

  if (event.target.matches("#terminal-input")) {
    // Add touch event listeners for terminal input
    event.target.addEventListener("click", handleClick);
    event.target.addEventListener("touchstart", handleClick);
  }
}
  