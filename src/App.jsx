import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Item from "./components/Item";

import { Link } from "react-router-dom";

const App = () => {
  const [userItems, setUserItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddUserItem = (obj) => {
    setTotal(total + obj.price);
    userItems.push(obj);
    setUserItems(userItems);
  };

  // const handleRemoveUserItem = (id) => {
  //   const obj = userItems.splice(
  //     userItems.findIndex((e) => e.id === id),
  //     1
  //   );
  //   setTotal(total - obj[0].price);
  //   setUserItems(...userItems);
  // };

  const elements = [];
  for (let i = 0; i < 10; i++) {
    elements.push(<Item handlerAddItem={handleAddUserItem} />);
  }

  return (
    <div>
      <Navbar userItems={userItems.length}></Navbar>
      <h1>Hello from the main page of the app!</h1>
      <button
        type="button"
        onClick={() =>
          handleAddUserItem({ price: 100, id: crypto.randomUUID() })
        }
      >
        Click me to add item
      </button>
      <div id="body">{elements}</div>
    </div>
  );
};

export default App;
