import React from "react";
import Slider from "./Slider";
import Title from "./Title";
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="Title_wrap p-15">
        <Title />
      </div>
      <div className="p-15 Slider_wrap">
        <Slider />
      </div>
    </div>
  );
}

export default App;
