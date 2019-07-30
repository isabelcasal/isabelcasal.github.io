import React from 'react';
import './App.css';
import aaron from './img/aaron.jpg';

function App() {
  return (
    <div className="App">
      <h3>
        Hi, my name is Aaron Pankratz. Welcome to my simple blog.
        <i className="fas fa-rocket"/>
      </h3>
      <img src={aaron} alt="Aaron" style={{height: '200px'}}/>
    </div>
  );
}

export default App;
