import React, { useState } from "react";

const Add = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const add = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={add}>Add Them</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default Add;
