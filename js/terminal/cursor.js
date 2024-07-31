export function initCursor() {
  const terminalInput = document.getElementById("terminal-input");
  const cursor = document.createElement("span");
  cursor.classList.add("cursor");
  terminalInput.parentElement.appendChild(cursor);
}