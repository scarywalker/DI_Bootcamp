import React, { useState } from "react";

function ControlledInputs() {
  const [person, setPerson] = useState({ firstName: "", age: "", email: "" });
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.age && person.email && person.firstName) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", age: "", email: "" })
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id}>
              Name: {firstName} Age: {age} Email: {email}
            </div>
          );
        })}
      </article>
    </>
  );
}

export default ControlledInputs;
