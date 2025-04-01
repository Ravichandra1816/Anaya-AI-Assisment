import React from "react";
import "./App.css";
import ai from "./assets/ai.png";
import { IoMdMic } from "react-icons/io";

const App = () => {
  return (
    <div className="main">
      <img src={ai} alt="virtual AI" id="anaya" />
      <span>Hi, I'm Anaya Virtual Assistant.</span>
      <button>
        Click here
        <IoMdMic />
      </button>
    </div>
  );
};

export default App;
