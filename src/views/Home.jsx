import { connect } from "react-redux";
import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { getCommits } from "../store/thunks";

const Container = styled.section`
  top: 50%;
  left: 50%;
  width: 500px;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 5px;
`;

const ContainerButtons = styled.div`
  margin: 20px auto 0 auto;

  button:not(first-child) {
    margin-left: 10px;
  }
`;

const Home = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <Container>
      <Title>Commits search</Title>
      <SearchInput
        type="text"
        placeholder="Search for commit messages"
        onInput={({ target }) => setQuery(target.value)}
      />

      <ContainerButtons>
        <Link to="/commits">
          <Button label="Search" click={() => onSearch(query)}></Button>
        </Link>
        <Button label="I'm Feeling Lucky"></Button>
      </ContainerButtons>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSearch: (query) => dispatch(getCommits(query)),
});

export default connect(null, mapDispatchToProps)(Home);
