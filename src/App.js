import React from 'react';

import './App.css';

import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
      <footer>
       This project was coded by {" "}
        
        
        <a 
        href="https://phenomenal-kringle-be6fc9.netlify.app/" 
        target="_blank" 
        rel="noopener noreferrer"> 
        Christina Motu
        </a>{" "}
        and is{" "}
        <a 
        href="https://github.com/cmotu/weather-react" 
        target="_blank" 
        rel="noopener noreferrer"> open-sourced on Github, 
        </a>
        <a href="" 
        target="_blank" 
        rel="noopener noreferrer">
           hosted on Netlify
          </a>
      </footer>
    </div>
    </div>
  );
}


