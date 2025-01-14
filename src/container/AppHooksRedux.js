import React, { useEffect } from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import "./App.css";
import Scroll from "../component/Scroll";
import ErrorBoundary from "../component/ErrorBoundary";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFiled, requestRobots } from "./action";

function Appp() {
  const { searchField } = useSelector((state) => {
    return state.searchReducer;
  });
  const { robots, error, isPendinge } = useSelector((state) => {
    return state.requestRobotsReducer;
  });
  const dispatch = useDispatch();

  const onSearchChange = (event) => {
    dispatch(setSearchFiled(event.target.value));
  };

  useEffect(() => {
    dispatch(requestRobots);
  }, []);

  const fielterdRobot = robots.filter((robotItems) => {
    return robotItems.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (isPendinge) {
    return <h1>Loading</h1>;
  } else if (!(error === "")) {
    return <h1>oooo no it's not good</h1>;
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
export default Appp;
