import React, { Component } from "react";
import data from "../data/data2.json";

export class Skills extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {data.Skills.map((item, i) => {
          return (
            <ul key={i}>
              <b>{item.Area}</b>
              {data.Skills[i].SkillSet.map((item, index) => {
                return <li key={index}>{item.Name}</li>;
              })}
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Skills;
