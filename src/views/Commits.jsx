import React, { useEffect } from "react";
import { connect } from "react-redux";

const Home = ({ commits = [] }) => {
  useEffect(() => {
    console.log(commits);
  }, [commits]);

  return (
    <>
      Commits
      {commits.map((commit) => (
        <div>{commit.url}</div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  commits: state.search.commits,
});

export default connect(mapStateToProps, null)(Home);
