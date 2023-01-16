import React, { Component } from "react";

import "./profile.style.css";

import Bio from "./Bio";
import Skills from "./Skills";
import Socials from "./Socials";

class Profile extends Component {
  me = {
    name: "Shipon Hossen Raju",
    title: "Fullstact Javascript Developer",
    skillA: "HTML",
    skillB: "CSS",
    skillC: "JAVASCRIPT",
  };

  render() {
    // console.log("Profile - :  ", this.props);
    return (
      <div className="Container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
        />
        <Socials />
      </div>
    );
  }
}

export default Profile;
