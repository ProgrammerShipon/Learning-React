import React, { Component } from "react";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.count = 5;
  // }
  count = 0;

  render() {
    // console.log(this.count);
    return (
      <div className="App">
        <h1> Pass Function As Props </h1>
        <h2> Count = {this.count} </h2> {/* to live in the feature */}
        <button
          onClick={() => {
            this.count++;  
            console.log("clicked", this.count);
          }}
        >
          {" "}
          add +1{" "}
        </button>
      </div>
    );
  }
}

export default App;
