import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//es6规范的导入
import a,{ num ,name} from './a'
 a()
 console.log(num,name);

 //以下是CommonJs规范导入


const common = require('./common');

console.log(common)






 //以上是CommonJs规范导入






class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}



export default App;
