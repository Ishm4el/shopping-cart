import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import { Outlet } from "react-router-dom";

const App = () => {
  const [userItems, setUserItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

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
      <Outlet context={[total]} />
    </div>
  );
};

export default App;
