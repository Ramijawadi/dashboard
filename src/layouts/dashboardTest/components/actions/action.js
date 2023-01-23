import data from "../../data/data.json";
import USER from "./store/constant";

const requestUsers =
  () =>
  // console.log(data)

  async (dispatch) => {
    try {
      dispatch({
        type: USER.LOAD_SUCCESS,
        payload: {
          users: data,
          isError: false,
        },
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: USER.LOAD_FAILURE,
        payload: {
          users: [],
          isError: true,
        },
      });
    }
  };

export default requestUsers;
