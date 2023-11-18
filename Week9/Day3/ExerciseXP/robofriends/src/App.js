import React from 'react';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';

const myelement1 = <h1>I Love JSX!</h1>;
const myelement2 = <h1>React is {5 + 5} times better with JSX</h1>;
const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  return (
    <div className="App">
      {myelement1}
      {myelement2}
      <h3>{user.firstName} {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <Exercise />
    </div>
  );
}

export default App;
