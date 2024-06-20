import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import { Outlet } from "react-router-dom";

const STORE_SIZE = 10;

const itemIDs = [];
for (let i = 0; i < STORE_SIZE; i++) {
  itemIDs.push(crypto.randomUUID());
}

const App = () => {
  const [userItems, setUserItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleAddUserItem = (obj) => {
    setTotal(total + obj.price);
    indexExist = userItems.findIndex((value) => {value.id === obj.id})
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
  for (let i = 0; i < STORE_SIZE; i++) {
    elements.push(<Item handlerAddItem={handleAddUserItem} id={itemIDs[i]} />);
  }

  return (
    <div>
      <Navbar
        userItems={userItems.length}
        setCurrentPath={setCurrentPath}
      ></Navbar>
      {currentPath !== "cart" ? (
        <>
          <h1>Hello from the main page of the app!</h1>
          <div id="body">{elements}</div>
          <span>{currentPath}</span>
        </>
      ) : null}
      <Outlet context={[total, userItems]} />
    </div>
  );
};

export default App;
