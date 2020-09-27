import { connect } from "react-redux";
import styled from "styled-components";
import Commit from "../components/Commit";
import { getCommits } from "../store/thunks";
import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import { useLocation, useHistory, Link } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 0 5%;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const SearchContainer = styled.div`
  width: 400px;
  margin-left: 20px;
`;

const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;

  a {
    color: #333;
    font-size: 20px;
    text-decoration: none;
  }
`;

const Header = ({ onSearch }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <Link to="/">Commits</Link>
      </HeaderTitle>

      <SearchContainer>
        <SearchInput onClick={onSearch} onInput={() => null} />
      </SearchContainer>
    </HeaderContainer>
  );
};

const Commits = ({ commits = [], loadCommits }) => {
  const history = useHistory();
  const [query] = useState(useQuery().get("q"));

  useEffect(() => {
    loadCommits(query);
  }, [loadCommits, query]);

  const onSearch = (query) => {
    history.push(`/commits?q=${query}`);
    loadCommits(query);
  };

  return (
    <>
      <Header onSearch={onSearch} />
      <Container>
        {commits.map((commit) => (
          <Commit
            id={commit.sha}
            key={commit.sha}
            url={commit.html_url}
            title={commit.commit.message}
            author={commit.commit.author.name}
            repository={commit.repository.name}
          />
        ))}
      </Container>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadCommits: (query) => dispatch(getCommits(query)),
});

const mapStateToProps = (state) => ({
  commits: state.search.commits,
});

export default connect(mapStateToProps, mapDispatchToProps)(Commits);
