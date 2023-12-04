"use strict";

let contents = [
  { text: "Hello, Hackers", isHTML: false },
  { text: "> Mission: Match the colors on time", isHTML: false },
  { text: "> Choose to play or Go Back to Google.", isHTML: false },
  { text: "> Best regards...", isHTML: false }
];
let currentElementIndex = 0;
let charIndex = 0;
let elements = document.querySelectorAll(".output, h1");
let text;

function typing() {
  if (currentElementIndex < elements.length) {
    text = elements[currentElementIndex];
    let currentContent = contents[currentElementIndex];

    if (charIndex < currentContent.text.length) {
      text.textContent += currentContent.text[charIndex++];
      setTimeout(typing, 100); // Adjust typing speed if necessary
    } else {
      if (currentElementIndex === 2) {
        createLinks();
      }
      charIndex = 0;
      currentElementIndex++;
      if (currentElementIndex < elements.length) {
        setTimeout(typing, 1000); // Adjust delay for the next text
      }
    }
  }
}

function createLinks() {
  text.innerHTML = text.textContent.replace('play', '<a href="#" id="playLink">play</a>')
    .replace('Go Back to Google', '<a href="#" id="googleLink">Go Back to Google</a>');
  attachLinkListeners();
}

function attachLinkListeners() {
  let playLink = document.getElementById("playLink");
  let googleLink = document.getElementById("googleLink");
  if (playLink) {
    playLink.addEventListener("click", navigateToPlay);
  }
  if (googleLink) {
    googleLink.addEventListener("click", navigateToGoogle);
  }
}

function navigateToPlay() {
  window.location.href = 'when_play.html'; // Replace with your next page URL
}

function navigateToGoogle() {
  window.location.href = 'https://www.google.com/';
}

document.addEventListener('DOMContentLoaded', (event) => {
  typing();
});
