import React, { Component } from "react";

import BoxA from "./box_a";
import BoxB from "./box_b";

import "./inline.style.css";

const myHeader = {
  color: "blue",
  fontWeight: 300,
  fontFamily: "Arial",
  fontSize: "36px",
};

class InlineStyles extends Component {
  render() {
    return (
      <div className="inlineStyles">
        <h1 style={myHeader}> How to style React App </h1>
        <h1 style={myHeader}> Another Header Tag </h1>
        <h1
          style={{
            color: "blue",
            fontWeight: 300,
            fontFamily: "Arial",
            fontSize: "36px",
          }}
        >
          {" "}
          Inline style Header Tag{" "}
        </h1>

        <button className="button"> Click Me A </button>

        <BoxA />
        <BoxB />

        <button>Another</button>
      </div>
    );
  }
}

export default InlineStyles;
