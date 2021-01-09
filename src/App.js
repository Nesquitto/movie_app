import React from "react";

class App extends React.Component {
  state = {
      count: 0
  };
  add = () => {
    console.log("add");
    this.setState(current => ({count:current.count + 1})); // current를 사용할 수 있기 때문에,
  };
  minus = () => {
    console.log("minus");
    this.setState({count:this.state.count - 1}); // 선호하지는 않음
  };
  render(){
    return( 
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;
