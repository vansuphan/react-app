import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Test,{} from './component/Test';
import TodoItem,{} from './component/TodoItem';
class App extends Component{
  constructor(){
    super();
    this.TodoItems=[
      {title:'Phan Van Su', dichoixong:true},
      {title:'name 1', dichoixong:false},
      {title:'name 1', dichoixong:false}
    ];
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src 'App.js' </code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {this.TodoItems.map((item,index) => (
            <Test key = {index} value = {item} />
            ))}
          <Test value='name 4' name={'phan'} />
          {this.TodoItems.length === 0 && 'Nothing here' }
        </header>
        <TodoItem title='todo'/>
      </div>
    );
  }
  
}

export default App;
