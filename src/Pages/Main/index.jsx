import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Paragraph } from '../../Shared/StyledTags';
import { flexCenter } from '../../Styles/theme';

const Main = () => {
  return (
    <MainPage>
      <h1>CareMind Coading-Test</h1>
      <Paragraph
        margin="30px 0 0"
      >안녕하십니까, 저는 케어마인드 프론트엔드 개발자 채용에 지원한 김태형입니다.</Paragraph>
      <MainLinker>
        <MainLinkerItem background="#FF91D4">
          <Link to="/1-1">1-1. Mobile Menu</Link>
        </MainLinkerItem>
        <MainLinkerItem background="#FF91D4">
          <Link to="/1-2">1-2. Font-Size Button</Link>
        </MainLinkerItem>
        <MainLinkerItem divided>
          <Link to="/1-1">2-1. Mobile Menu</Link>
        </MainLinkerItem>
        <MainLinkerItem>
          <Link to="/1-1">2-2. Font-Size Button</Link>
        </MainLinkerItem>
      </MainLinker>
    </MainPage>
  )
}

const MainPage = styled.main`
  height: 100vh;
  padding: 100px;
`;

const MainLinker = styled.ul`
  ${flexCenter};
  width: ${({ theme }) => theme.widthWeb};
  margin: 80px auto 0;
  padding: 20px;
  background: ${({ theme }) => theme.gray0};
  border-radius: 5px;
`;

const MainLinkerItem = styled.li`
  width: 16%;
  height: 40px;
  margin: ${({ divided }) => divided ? "0 10px 0 50px" : "0 10px"};
  background: ${({ background, theme }) => background || theme.gray1};
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 40px;
  }
`;

export default Main
