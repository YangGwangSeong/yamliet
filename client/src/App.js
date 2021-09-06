import React from "react";
import { Route } from 'react-router-dom';
import Slider from "./Slider";
import Title from "./Title";

import Deck from "./Deck";
import './App.css';

//npm install react-router-dom
//npm install react-spring

function App() {
  return (
    <div className="App">
      <div className="Title_wrap p-15">
        <Title />
      </div>
      <div className="p-15 Slider_wrap">
        <div>
          <Route path="/" exact={true} component={Slider} />
          <Route path="/Deck" component={Deck} />
        </div>
      </div>
    </div>
  );
}

export default App;
