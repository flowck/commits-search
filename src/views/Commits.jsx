import { connect } from "react-redux";
import React, { useEffect } from "react";
import Commit from "../components/Commit";
import { getCommits } from "../store/thunks";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Commits = ({ commits = [], loadCommits }) => {
  const query = useQuery().get("q");
  useEffect(() => {
    loadCommits(query);
  }, [loadCommits, query]);

  return (
    <Container>
      Commits
      {commits.map((commit) => (
        <Commit
          id={commit.sha}
          key={commit.sha}
          url={commit.html_url}
          title={commit.commit.message}
          repository={commit.repository.name}
          author={commit.commit.author.name}
        />
      ))}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadCommits: (query) => dispatch(getCommits(query)),
});

const mapStateToProps = (state) => ({
  commits: state.search.commits,
});

export default connect(mapStateToProps, mapDispatchToProps)(Commits);
