import styled from "styled-components";
import React, { useState } from "react";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [query, setQuery] = useState("");

  const search = () => {
    if (query) {
      history.push(`/commits?q=${query}`);
    }
  };

  return (
    <Container>
      <Title>Commits search</Title>
      <SearchInput
        type="text"
        placeholder="Search for commit messages"
        onInput={({ target }) => setQuery(target.value)}
      />

      <ContainerButtons>
        <Button label="Search" click={search}></Button>
        <Button label="I'm Feeling Lucky"></Button>
      </ContainerButtons>
    </Container>
  );
};

export default Home;
