import React from "react";
import { Route, Switch } from 'react-router-dom';
import Slider from "./Slider";
import Title from "./Title";
import DeckContainers from "./DeckContainers";
//import './App.css';

//npm install react-router-dom
//npm install react-spring
//npm install react-use-gesture

function App() {
  return (
    // <div className="App">
    //   <div className="Title_wrap p-15">
    //     <Title />
    //   </div>
    //   <div className="p-15 Slider_wrap">
    //     <div>
    //       <Route path="/" exact={true} component={Slider} />
    //     </div>
    //   </div>
    // </div>
    <>
      <Title />
      <Switch>
        <Route path="/" exact={true} component={Slider} />
        <Route path="/Deck" component={DeckContainers} />
      </Switch>
    </>
  );
}

export default App;
