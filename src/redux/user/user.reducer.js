import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  // we catch and react only on needed action by this function because redux catches all the actions of our app
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER: // if this is our action
      return {
        ...state, // we will spread all the current values of the state
        currentUser: action.payload, // that is only what we want to update after the action
      };

    default:
      return state; //if the action doesn't match our "case" we just return CURRENT state with no change
  }
};

export default userReducer;
