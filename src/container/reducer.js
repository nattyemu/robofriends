import {
  CHANGE_SEARCH_FILED,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
} from "./constants";

const initialStateSearch = {
  searchField: "",
};

export const searchReducer = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FILED:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobot = {
  isPending: false,
  robots: [],
  error: "",
};
export const requestRobotsReducer = (
  state = initialStateRobot,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
