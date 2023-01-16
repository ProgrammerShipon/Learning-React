import React, { Component } from "react";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.count = 5;
  //   this.state = {
  //     count: 1,
  //   };
  // }
  // count = 1;

  state = {
    count: 1,
    lotOfFunction: {},
  };

  render() {
    // console.log(this.count);
    return (
      <div className="App">
        <h1> Pass Function As Props </h1>
        <h2> Count = {this.state.count} </h2>
        <button
          onClick={() => {
            // this.count++;
            // this.setState({ count: this.state.count + 1 });
            this.setState(
              (preval) => {
                return { count: this.state.count + 1 };
              },
              () => {
                console.log("clicked", this.state.count);
              }
            );
          }}
        >
          add +1
        </button>{" "}
        {"   "} {"   "}
        <button
          onClick={() => {
            // this.setState({ count: this.state.count - 1 });
            this.setState(
              (preval) => {
                return { count: this.state.count - 1 };
              },
              () => {
                console.log("clicked", this.state.count);
              }
            );
          }}
        >
          {" "}
          sub -1{" "}
        </button>
      </div>
    );
  }
}

export default App;
