import React from "react";
import styled from "styled-components";

const CommitContainer = styled.article`
  margin-bottom: 40px;
`;

const Header = styled.header`
  /* border: 1px solid red; */
  a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  line-height: 1;
  color: #00278e;
  font-size: 18px;
  margin-bottom: 5px;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  /* border: 1px solid blue; */
`;

const CommitUrl = styled.span`
  color: #999;
  font-size: 12px;
`;

const Meta = styled.span`
  color: #666;
  font-size: 12px;
  margin-right: 20px;

  b {
    font-weight: bold;
  }
`;

const Commit = ({ id, title, author, url, repository }) => {
  return (
    <CommitContainer>
      <Header>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <CommitUrl>{url.replace("https://", "")}</CommitUrl>
          <Title>{title}</Title>
        </a>
      </Header>

      <Footer>
        <Meta>
          <b>Author</b>: {author}
        </Meta>
        <Meta>
          <b>Repository</b>: {repository}
        </Meta>
      </Footer>
    </CommitContainer>
  );
};

export default Commit;
