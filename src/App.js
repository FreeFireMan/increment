import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state = {
    count: 0,
  };

    countHandler = val =>
      this.setState( pevState => ({
          count: pevState.count + val >= 0 ? pevState.count + val : 0
          })
      )

  render() {
        const {count} = this.state;
    return (
        <div className="App">
          <div><h1>{this.state.count}</h1></div>
          <button onClick={this.countHandler.bind(this,1)} value="Plus" >Plus</button>
          <button onClick={this.countHandler.bind(this,-1)}>Minus</button>
          <button onClick={this.countHandler.bind(this,-count)}>Reset</button>
          <button onClick={this.countHandler.bind(this,100)}>Plus 100</button>
          <button onClick={this.countHandler.bind(this,-100)}>Minus 100</button>
        </div>
    );
  }
}

export default App;
