import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state = {
    count: 0,
  };
  resultObserver = (it) =>{
    this.setState(prev =>(
        prev.count+it >= 0 ? { count: this.state.count+it} : alert("don't minus, do plus")
    ))
  }
  plusMinusHandler = (e) => {
    e.target.value.toString() === "Plus" ? this.resultObserver(1) :
        this.resultObserver(-1)
  }

  resetHandler =(e) =>{
    this.setState({
      count: 0,
    })
  };
  plusMinus100Handler = (e) => {
    e.target.value.toString() === "Plus" ? this.resultObserver(100) :
        this.resultObserver(-100)
  }

  render() {
    return (
        <div className="App">
          <div><h1>{this.state.count}</h1></div>
          <button onClick={this.plusMinusHandler} value="Plus" >Plus</button>
          <button onClick={this.plusMinusHandler} >Minus</button>
          <button onClick={this.resetHandler}>Reset</button>
          <button onClick={this.plusMinus100Handler} value="Plus">Plus 100</button>
          <button onClick={this.plusMinus100Handler}>Minus 100</button>
        </div>
    );
  }
}

export default App;
