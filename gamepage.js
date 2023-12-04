document.addEventListener('DOMContentLoaded', () => {
  initializeTimer(15); // 25-second timer
  populateCircles(19); // 19 circles
});

function initializeTimer(duration) {
  let timeLeft = duration;
  const timerElement = document.getElementById('timer');

  const countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerElement.textContent = 'Time is up!';
      evaluateScore();
    }
  }, 1000);
}

function populateCircles(numberOfCircles) {
  const colors = ['red', 'blue', 'yellow', 'green', 'white'];
  const container = document.getElementById('circleContainer');

  for (let i = 0; i < numberOfCircles; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(circle);
    // Add event listener for user click
    circle.addEventListener('click', function() {
      this.classList.toggle('selected');
    });
  }
}

function evaluateScore() {
  const circles = document.querySelectorAll('.circle');
  let score = 0;
  circles.forEach(circle => {
    if (circle.classList.contains('selected')) {
      // Add score based on color
      score += getColorScore(circle.style.backgroundColor);
    }
  });

  // Display result
  displayResult(score);
}

function getColorScore(color) {
  // Define points per color
  switch (color) {
    case 'red':
    case 'blue':
    case 'yellow':
    case 'green':
      return 5;
    case 'white':
      return 6;
    default:
      return 0;
  }
}

function displayResult(score) {
  // Hide the circle container and timer
  document.getElementById('circleContainer').style.display = 'none';
  document.getElementById('timer').style.display = 'none';

  // Create and display the result text
  const resultDisplay = document.createElement('div');
  resultDisplay.id = 'resultDisplay';
  resultDisplay.textContent = score >= 60 ? 'SUCCESS' : 'FAILED';
  resultDisplay.style.color = score >= 60 ? 'green' : 'red';
  resultDisplay.style.position = 'fixed';
  resultDisplay.style.top = '50%';
  resultDisplay.style.left = '50%';
  resultDisplay.style.transform = 'translate(-50%, -50%)';
  resultDisplay.style.fontSize = '6em'; // Font size doubled
  resultDisplay.style.textAlign = 'center';
  resultDisplay.style.width = '100%';
  document.body.appendChild(resultDisplay);
}
