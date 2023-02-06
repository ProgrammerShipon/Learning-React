import React, { Component } from "react";

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
      </div>
    );
  }
}

export default InlineStyles;
