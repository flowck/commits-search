import { SET_COMMITS, GET_COMMITS } from "./actions";

const initialState = {
  commits: [],
  isLoading: false,
};
export const search = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COMMITS:
      return { ...state, commits: [...state.commits, ...payload] };
    default:
      return state;
  }
};
