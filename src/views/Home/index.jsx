import React, { useState } from "react";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import { Container, ContainerButtons, Title } from "./styles";

const Home = () => {
  const history = useHistory();
  const [query, setQuery] = useState("");

  const search = () => {
    if (query) {
      history.push(`/commits?q=${query}`);
    }
  };

  return (
    <Container>
      <Title>Commits</Title>
      <SearchInput onClick={search} onInput={(value) => setQuery(value)} />

      <ContainerButtons>
        <Button label="Search" click={search} />
        <Button label="I'm Feeling Lucky" />
      </ContainerButtons>
    </Container>
  );
};

export default Home;
