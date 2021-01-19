'use strict';

// 1) Subscibe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"

window.addEventListener('keyup', (event) => {
  const header = document.querySelector('h1');
  const pressedKeyCode = event.keyCode;
  header.innerHTML = `Last pressed key code is: ${pressedKeyCode}`;
});