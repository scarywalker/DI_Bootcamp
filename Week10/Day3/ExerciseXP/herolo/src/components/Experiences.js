import React, { Component } from "react";
import data from "../data/data2.json";

export class Experiences extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {data.Experiences.map((item, i) => {
          return (
            <div key={i}>
              <img src={item.logo} alt="" />
              <a href={item.url}>{item.companyName}</a>
              <p>{item.roles[0].title}</p>
              <p>{item.roles[0].startDate}</p>
              <p>{item.roles[0].description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Experiences;
