import React, { Component } from "react";

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

        <button> Click Me A </button>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolor provident nostrum error possimus! Accusantium.</p>
        <button> link me B </button>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolor provident nostrum error possimus! Accusantium.</p>
        <button> link me C </button>
      </div>
    );
  }
}

export default InlineStyles;
