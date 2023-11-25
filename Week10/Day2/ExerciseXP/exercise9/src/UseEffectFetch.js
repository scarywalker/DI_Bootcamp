import React, { useState, useEffect } from "react";

const url = "https://gorest.co.in/public/v2/users";

function UseEffectFetch() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const usersData = await response.json();
      setUsers(usersData);
      setIsLoading(false);
    } catch {
      setIsError(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) return <h1>LOADING...</h1>;

  if (isError) return <h1>ERROR</h1>;

  return (
    <div>
      <h1>UseEffectFetch</h1>
      <ul>
        {users.map((user) => {
          const { id, email, gender, name, status } = user;
          return (
            <li key={id}>
              <h6>
                EMAIL: {email} GENDER:{gender} NAME: {name} STATUS: {status}
              </h6>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseEffectFetch;
