import React, { useState, useEffect } from "react";
import CardList from "../component/CardList";
import { robots } from "../robots";
import SearchBox from "../component/SearchBox";
import "./App.css";
import Scroll from "../component/Scroll";
import ErrorBoundary from "../component/ErrorBoundary";

// to render this page means to check is working the hooks way as same as the compenent * change the index.js file in src folder
// from import App from "./container/App";
// to import App from "./container/AppHooks";

function App() {
  //if u use the useEffect or data connection change the useState for robot from robots to []
  const [robot, setRobot] = useState(robots);
  const [searchField, setSearchFiled] = useState("");

  const onSearchChange = (event) => {
    setSearchFiled(event.target.value);
  };

  //use this useEffect when we use data connection to request the api in function

  // useEffect(()=> {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => setRobot(users));
  // },[])

  const fielterdRobot = robot.filter((robotItems) => {
    return robotItems.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (!robot.length) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={fielterdRobot} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
export default App;
