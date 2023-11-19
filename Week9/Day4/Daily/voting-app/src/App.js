import React, { useState } from "react";

const App = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const voteForLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div>
      {languages.map((language, index) => (
        <div key={index}>
          <p>
            {language.name}: {language.votes} votes
          </p>
          <button onClick={() => voteForLanguage(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default App;
