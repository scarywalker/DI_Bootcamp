import React, { useContext, useState } from "react";

const data = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
];

const PersnoContext = React.createContext();

function ContextApi() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersnoContext.Provider value={{ removePerson, people }}>
      <h3>gmsrlge</h3>
      <List />
    </PersnoContext.Provider>
  );
}

const List = () => {
  const { people } = useContext(PersnoContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersnoContext);
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextApi;
