import React, { Component } from "react";

import Profile from "./profile";
// import Skills from "./profile/Skills";

import MyProps from "./props";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        {/* <div style={{ marginTop: "30", marginBottom: "30px" }}>
          <h3 style={{ marginBottom: "20px" }}>List of Programmers</h3>
        </div> */}
        {/* <h1> Mr. Rana </h1>
        <Skills />
        <h1> Mr. Sifat </h1>
        <Skills /> */}
        {/* <MyProps name="Shipon Hossen Raju" />
        <MyProps name="Arman Ali" />
        <MyProps name=" Saiful Islam" /> */}
      </div>
    );
  }
}

export default App;
