const express = require("express");
const app = express();
const port = 3000;

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
];

const leaderboard = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/game", (req, res) => {
  const randomEmoji = getRandomEmoji(emojis);
  const options = generateOptions(emojis, randomEmoji);

  res.json({ emoji: randomEmoji.emoji, options });
});

app.post("/guess", (req, res) => {
  const { emoji, guess } = req.body;

  const emojiObject = emojis.find((e) => e.emoji === emoji);

  if (emojiObject && emojiObject.name === guess) {
    leaderboard.push({ name: "Player", score: 1 });
    res.json({ result: "Correct!" });
  } else {
    res.json({ result: "Incorrect!" });
  }
});

app.get("/leaderboard", (req, res) => {
  leaderboard.sort((a, b) => b.score - a.score);
  res.json(leaderboard.slice(0, 10));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function getRandomEmoji(emojiArray) {
  return emojiArray[Math.floor(Math.random() * emojiArray.length)];
}

function generateOptions(emojiArray, correctEmoji) {
  const options = [correctEmoji.name];

  while (options.length < 4) {
    const randomEmoji = getRandomEmoji(emojiArray);
    if (!options.includes(randomEmoji.name)) {
      options.push(randomEmoji.name);
    }
  }

  return shuffleArray(options);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// dont know what is the problem, pls halp