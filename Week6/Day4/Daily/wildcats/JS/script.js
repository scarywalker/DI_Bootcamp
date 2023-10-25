const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

const usernames = [];
let totalScore = 0;

gameInfo.forEach((player) => {
    player.score > 5 ? usernames.push(player.username + "!") : null;
   });

console.log(usernames);

gameInfo.forEach((player) => {
    totalScore += player.score;
   });

console.log(totalScore);