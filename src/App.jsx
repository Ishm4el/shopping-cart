import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import { Link } from "react-router-dom";

const App = () => {
  const [userItems, setUserItems] = useState(0);
  return (
    <div>
      <Navbar userItems={userItems}></Navbar>
      <h1>Hello from the main page of the app!</h1>
      <button type="button" onClick={() => setUserItems(userItems + 1)}>
        Click me to add item
      </button>
    </div>
  );
};

export default App;
