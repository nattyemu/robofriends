import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../component/CardList";
import { robots } from "../robots";
import SearchBox from "../component/SearchBox";
import "./App.css";
import Scroll from "../component/Scroll";
import ErrorBoundary from "../component/ErrorBoundary";
import { setSearchFiled, requestRobots } from "./action";

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchFiled(event.target.value)),
    fetchRobote: () => dispatch(requestRobots()),
  };
};
const mapStateToProps = (state) => {
  return {
    searchField: state.searchReducer.searchField,
    isPending: state.requestRobotsReducer.isPending,
    error: state.requestRobotsReducer.error,
    robots: state.requestRobotsReducer.robots,
  };
};
class App extends Component {
  componentDidMount() {
    this.props.fetchRobote();
  }
  render() {
    const { robots, isPending, error } = this.props;
    const { searchField } = this.props;

    const fielterdRobot = robots.filter((robotItems) => {
      return robotItems.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
      return <h1>Loading</h1>;
    } else if (!(error === "")) {
      return <h1>oooo no it's not good</h1>;
    } else {
      return (
        <div>
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={this.props.onSearchChange} />
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
