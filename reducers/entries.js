import * as types from "../constants/ActionTypes";

const initialState = {
  entry: {
    header: "Hello",
    text: "Test 1, 2, 3"
  }
};

function entries(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_ENTRY:
      return {entry: action.entry};

    default:
      return state;
  }
}

export default entries;

