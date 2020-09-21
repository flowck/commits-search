import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Button = ({ id, label, click }) => {
  return (
    <Container onClick={click} id={id}>
      {label}
    </Container>
  );
};

export default Button;
