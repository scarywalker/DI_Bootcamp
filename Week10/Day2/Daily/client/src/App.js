import React, { Component } from "react";
import UserForm from "./components/UserForm";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: null };
  }
  async componentDidMount() {
    const url = "http://localhost:3001/api/hello";
    try {
      const res = await fetch(url);
      const data = await res.text();
      this.setState({ message: data });
      console.log("res:", data);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <>
        <UserForm />
        <div>Message: {this.state.message}</div>
      </>
    );
  }
}

export default App;
