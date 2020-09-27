import styled from "styled-components";

export const Container = styled.section`
  top: 50%;
  left: 50%;
  width: 500px;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  color: #222;
  font-size: 60px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ContainerButtons = styled.div`
  margin: 30px auto 0 auto;

  button {
    color: #666;
    border-radius: 3px;
    padding: 10px 30px;
    border: 1px solid transparent;
  }

  button:hover {
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  }

  button:active,
  button:focus {
    outline: none;
    border-color: #0056af;
  }

  button:not(:first-child) {
    margin-left: 10px;
  }
`;
