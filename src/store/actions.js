/**
 * Constants
 */
export const SET_COMMITS = "SET_COMMITS";
export const GET_COMMITS = "GET_COMMITS";

/**
 * Action creators
 */
export const setCommits = (commits) => {
  return { type: SET_COMMITS, payload: commits };
};

export const getCommits = () => ({ type: GET_COMMITS });
