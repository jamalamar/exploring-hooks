import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button.js'
import DataLoader from './data-loader.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button/>
        <DataLoader 
          render={data => {
            return (
              <div>
                <ul>
                  {data.map(el =>(
                    <li key={el.id}>{el.title}</li>
                    ))}
                </ul>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
