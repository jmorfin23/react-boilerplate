import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  render() {
    return(
      <>
      <div>This is a test react application</div>
      <p>helllo</p>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
