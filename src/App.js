import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);

  const imageFilename = `${toggle ? "pic1.jpg" : "pic2.jpg"}?${Date.now()}`;

  return (
    <div className="App">
      <div id="msg">
        imageFilename is {imageFilename}
        <button onClick={() => setToggle((f) => !f)}>Toggle</button>
      </div>
      <img src={imageFilename} />
    </div>
  );
}

export default App;
