import React from "react";
import styled from "styled-components";

/**
 * Search input
 */
export const InputContainer = styled.input`
  width: 100%;
  padding: 12px 20px;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:active,
  &:focus {
    outline: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const SearchInput = ({ onInput, onClick }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onClick(event.target.value);
    }
  };

  return (
    <InputContainer
      type="text"
      onKeyPress={handleKeyPress}
      placeholder="Search for commit messages"
      onInput={({ target }) => onInput(target.value)}
    />
  );
};

export default SearchInput;
