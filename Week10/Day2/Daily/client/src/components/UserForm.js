import React, { Component } from "react";

export class UserForm extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const message = document.getElementById("search").value;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    };
    const url = "http://localhost:3001/api/world";
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="something" id="search" />
        <input type="submit" value={"Submit"} />
      </form>
    );
  }
}

export default UserForm;
