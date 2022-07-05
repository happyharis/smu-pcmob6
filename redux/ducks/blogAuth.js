export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const logInAction = (payload) => ({
  // TODO: 1. Add type login action
  payload,
});

export const logOutAction = (payload) => ({
  type: LOG_OUT,
  payload,
});

const initialState = {};

export default function blogAuthReducer(state = initialState, action) {
  switch (action) {
    case LOG_IN:
      return { ...state, token: action.payload };
    case LOG_OUT:
      return { ...state, token: null };

    default:
      return state;
  }
}
