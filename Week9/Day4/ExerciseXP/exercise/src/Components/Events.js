import React, { useState } from 'react';

const Events = () => {
  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      alert(`Enter key pressed. Input value: ${event.target.value}`);
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleState = () => {
    setIsToggleOn((prevToggleState) => !prevToggleState);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>

      <input type="text" onKeyDown={handleKeyDown} placeholder="Type and press Enter" />
      <button onClick={toggleState}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Events;
