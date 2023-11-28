import React, { useState } from "react";
import "./App.css";
import heroes from "./data/heroes.json";

function App() {
  const [stateHero, setStateHero] = useState(heroes.superheroes);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const handleClick = (clickedHero) => {
    let array = [...stateHero];

    if (clickedHero.clicked) {
      array.forEach((hero) => {
        hero.clicked = false;
      });
      setScore(0);
    } else {
      array.forEach((hero) => {
        if (hero.id === clickedHero.id) {
          hero.clicked = true;
        }
      });
      setScore(score + 1);
    }

    score > topScore && setTopScore(score);

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setStateHero(array);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <h1>Superheroes React Memory Game</h1>
        <div>Score: {score}</div>
        <div>TOP Score: {topScore}</div>
      </nav>
      <h2 className="rules">
        Get points by clicking in a hereo that you are yet to click
      </h2>
      <div className="heroesContainer">
        {stateHero.map((hero) => (
          <div
            className="heroCard"
            key={hero.id}
            onClick={() => handleClick(hero)}
          >
            <img src={hero.image} alt={hero.name} width="240" height="300" />
            <div>
              <span className="heroName">Hero Name: </span>
              {hero.name}
            </div>
            <div>
              <span className="heroName">Occupation: </span>
              {hero.occupation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
