document.addEventListener('DOMContentLoaded', () => {
    const emojiDisplay = document.getElementById('emoji-display');
    const options = document.getElementById('options');
    const optionButtons = document.getElementsByClassName('option');
    const guessForm = document.getElementById('guess-form');
    const resultMessage = document.getElementById('result');
    const emojiInput = document.getElementById('emoji');
    const guessInput = document.getElementById('guess');
    const leaderboard = document.getElementById('leaderboard');
  
    // Function to start a new round
    function startRound() {
      // Clear previous round's result
      resultMessage.textContent = '';
  
      // Fetch a new emoji and options from the server
      fetch('/game')
        .then((response) => response.json())
        .then((data) => {
          emojiDisplay.textContent = `Guess the Emoji: ${data.emoji}`;
          // Set options text on buttons
          for (let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].textContent = data.options[i];
          }
          emojiInput.value = data.emoji;
        })
        .catch((error) => console.error(error));
    }
  
    // Function to submit a guess
    guessForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = new FormData(guessForm);
  
      fetch('/guess', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          resultMessage.textContent = data.result;
          // Start a new round after a delay
          setTimeout(startRound, 2000);
        })
        .catch((error) => console.error(error));
    });
  
    // Function to display the leaderboard
    function displayLeaderboard() {
      fetch('/leaderboard')
        .then((response) => response.json())
        .then((data) => {
          leaderboard.innerHTML = ''; // Clear previous leaderboard
          data.forEach((entry, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${entry.name}: ${entry.score}`;
            leaderboard.appendChild(li);
          });
        })
        .catch((error) => console.error(error));
    }
  
    // Start the game by starting the first round and displaying the leaderboard
    startRound();
    displayLeaderboard();
  });
  