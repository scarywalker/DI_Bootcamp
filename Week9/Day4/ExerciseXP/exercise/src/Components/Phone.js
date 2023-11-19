import React, { useState } from "react";

const Phone = () => {
  const [phoneInfo, setPhoneInfo] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  const changeColor = () => {
    setPhoneInfo((prevPhoneInfo) => ({
      ...prevPhoneInfo,
      color: "blue",
    }));
  };

  return (
    <div>
      <h1>My phone is a {phoneInfo.brand}</h1>
      <p>
        It's a {phoneInfo.color} {phoneInfo.model} from {phoneInfo.year}
      </p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Phone;
