import React, { useState, useEffect } from "react";

const url = "https://gorest.co.in/public/v2/users";

function UseEffectFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    const response = await fetch(url);
    const usersData = await response.json();
    console.log(usersData);
    setUsers(usersData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <h1>LOADIND...</h1>;

  return (
    <div>
      <h1>UseEffectFetch</h1>
      <ul>
        {users.map((user) => {
          const { id, email, gender, name, status } = user;
          return (
            <li>
              <h6>
                ID: {id} EMAIL: {email} GENDER:{gender} NAME: {name} STATUS:{" "}
                {status}
              </h6>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseEffectFetch;
