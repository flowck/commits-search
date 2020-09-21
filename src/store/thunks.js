import { setCommits } from "./actions";
const { REACT_APP_API } = process.env;
const OPTIONS = {
  headers: { Accept: "application/vnd.github.cloak-preview+json" },
};

/**
 * Get commits
 */
export const getCommits = (query = "", page = 1) => async (dispatch) => {
  try {
    const response = await fetch(
      `${REACT_APP_API}/search/commits?q=${query}`,
      OPTIONS
    );
    const commits = await response.json();

    dispatch(setCommits(commits.items));
  } catch (error) {}
};
