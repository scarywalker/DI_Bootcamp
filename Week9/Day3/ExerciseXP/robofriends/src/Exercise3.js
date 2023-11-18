import React from 'react';
import './Exercise.css';

const style_header = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial'
};

class Exercise extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: 'red', backgroundColor: 'lightblue', ...style_header }}>
          Hello, I'm an H1 tag!
        </h1>
        <p className="para">This is a paragraph with some styles applied using CSS.</p>
        <a href="https://www.example.com">This is a link</a>
        <form>
          <label>
            Form Input:
            <input type="text" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
        />
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
