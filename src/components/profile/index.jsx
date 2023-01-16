import React, { Component } from "react";

import "./profile.style.css";

import Bio from "./Bio";
import Skills from "./Skills";
import Socials from "./Socials";

class Profile extends Component {
  render() {
    // console.log("Profile - :  ", this.props);
    return (
      <div className="Container">
        <Bio />
        <Skills />
        <Socials />
      </div>
    );
  }
}

export default Profile;
