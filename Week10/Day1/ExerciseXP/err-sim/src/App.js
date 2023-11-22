import React from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  handleClick = () => {
    if (this.state.counter === 4) {
      throw new Error("I crashed");
    }
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.counter}</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
