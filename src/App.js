import React from 'react';
import "app.css";
import http from "./http.jpg";
import Nav from "./nav";

const App = () => (
  <div>
    <Nav />
    <h1 className="bgColor">Hello React!!!</h1>
    <img src={http} />
  </div>
)

export default App;
  
