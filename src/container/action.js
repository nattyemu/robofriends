import {
  CHANGE_SEARCH_FILED,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
} from "./constants";

export const setSearchFiled = (text) => {
  return {
    type: CHANGE_SEARCH_FILED,
    payload: text,
  };
};

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await response.json();
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
