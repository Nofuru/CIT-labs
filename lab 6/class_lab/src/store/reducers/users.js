import axios from "axios";

const GET_USERS = "GET-USERS";
const IS_LOADING = "IS-LOADING";

let initialState = {
  usersData: [],
  initialLoading: false,
};

const usersReducer = (state = initialState, action) => {
  let stateCopy = { ...state, usersData: [...state.usersData] };
  
  switch (action.type) {
    case GET_USERS:
      stateCopy.usersData = action.payload;

      return stateCopy;

    case IS_LOADING:
      stateCopy.initialLoading = action.initialLoading;

      return stateCopy;

    default:
      return stateCopy;
  }
};

const getUsersAC = (payload) => {
  return {
    type: GET_USERS,
    payload: payload,
  };
};

const isLoadingAC = (loading) => {
  return {
    type: IS_LOADING,
    initialLoading: loading,
  };
};

export const getUsersData = () => {
  return (dispatch) => {
    dispatch(isLoadingAC(true));
    axios.get("https://randomuser.me/api/?results=5").then((response) => {
      dispatch(getUsersAC(response.data.results));
      dispatch(isLoadingAC(false));
    });
  };
};

export default usersReducer;
