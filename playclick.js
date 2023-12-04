"use strict";

let contents = [
  { text: "Loading...", isHTML: false }
];
let currentElementIndex = 0;
let charIndex = 0;
let elements = document.querySelectorAll(".output, h1");
let text;
let startTime;

function typing() {
  const currentTime = new Date().getTime();
  if (!startTime) {
    startTime = currentTime;
  }

  if (currentElementIndex < elements.length) {
    text = elements[currentElementIndex];
    let currentContent = contents[currentElementIndex];

    if (charIndex < currentContent.text.length) {
      text.textContent += currentContent.text[charIndex++];
      setTimeout(typing, 200); // Slower typing speed
      // ... existing code ...

    } else if (currentTime - startTime < 5000) { // 5 to 6 seconds duration
      // Clear text and restart typing immediately
      text.textContent = '';
      charIndex = 0;
      setTimeout(typing, 50); // Very short delay before restarting
    } else {
      // Time completed, move to the game page
      window.location.href = 'gamepage.html'; // Replace with the actual URL of the game page
    }

// ... existing code ...

  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  typing();
});
