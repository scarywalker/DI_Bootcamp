import React, { Component } from "react";
import data from "./../data/data2.json";

export class SocialMedias extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {data.SocialMedias.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    );
  }
}

export default SocialMedias;
