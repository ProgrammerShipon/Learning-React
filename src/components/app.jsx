import React, { Component } from "react";

import Profile from "./profile";
// import Skills from "./profile/Skills";

// import MyProps from "./props";
import Bio from "./profile/Bio";
import Skills from "./profile/Skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Bio name="Test User" title="Test Title" />
        <div style={{ marginTop: "30", marginBottom: "30px" }}>
          <h3 style={{ marginBottom: "20px" }}>List of Programmers</h3>
        </div>
        <h2> Mr. Rana </h2>
        <Skills skillA="React" skillB="Angular" skillC="Vue" />
        <h2> Mr. Sifat </h2>
        <Skills skillA="NodeJS" skillB="ExpressJS" skillC="MongoDB" />

        {/* <MyProps name="Shipon Hossen Raju" />
        <MyProps name="Arman Ali" />
        <MyProps name=" Saiful Islam" /> */}
      </div>
    );
  }
}

export default App;
