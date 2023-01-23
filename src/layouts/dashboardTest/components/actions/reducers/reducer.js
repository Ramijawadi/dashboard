/* eslint-disable default-case */
import USER from "../store/constant";

const initalState = {
  usersData: [],
  isLoading: false,
  isError: false,
};

export default (state = { initalState }, action) => {
  // eslint-disable-next-line default-case

  switch (action.type) {
    case USER.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case USER.LOAD_SUCCESS:
      return {
        ...state,
        usersData: action.payload.users,
        isLoading: false,
        isError: action.payload.isError,
      };

    case USER.LOAD_FAILURE:
      return {
        ...state,
        usersData: action.payload.users,
        isLoading: false,
        isError: action.payload.isError,
      };
    default:
      return state;
  }
};
