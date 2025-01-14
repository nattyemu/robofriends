import React, { Component } from "react";
import CardList from "../component/CardList";
import { robots } from "../robots";
import SearchBox from "../component/SearchBox";
import "./App.css";
import Scroll from "../component/Scroll";
import ErrorBoundary from "../component/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: robots,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  // use this componentDidMount when we use data connection to request the api in component
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robot: users }))
  //     .catch((err) => {
  //       console.error("error during fetching");
  //     });
  // }

  render() {
    const { robot, searchField } = this.state;

    const fielterdRobot = robot.filter((robotItems) => {
      return robotItems.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robot.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div>
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          {/* or we can pass argument as this  */}
          {/* <SearchBox
            searchChange={(e) => this.onSearchChange(e)}
          /> */}
          <Scroll>
            <ErrorBoundary>
              <CardList robots={fielterdRobot} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
