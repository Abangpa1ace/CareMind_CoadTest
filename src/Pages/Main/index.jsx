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
        
        <MainLinkerItem background="#7CFFDD" divided>
          <Link to="/2-1" onClick={(e) => e.preventDefault()} >
            2-1. Props Render
            <MainLinkerMsg>링크가 없습니다. 디렉토리(혹은 Github) HTML 파일을 참조해주세요!</MainLinkerMsg>
          </Link>
        </MainLinkerItem>
        <MainLinkerItem background="#7CFFDD">
          <Link to="/2-2">2-2. Pie Chart</Link>
        </MainLinkerItem>
        <MainLinkerItem background="#7CFFDD">
          <Link to="/2-3">2-3. Redux Login</Link>
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
  width: 1200px;
  margin: 80px auto 0;
  padding: 20px;
  background: ${({ theme }) => theme.gray0};
  border-radius: 5px;
`;

const MainLinkerMsg = styled.p`
  position: absolute;
  bottom: -50px;
  padding: 10px;
  background: #ffffff;
  color: #FE3D3D;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  font-size: 11px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-20px);
  transition: ${({ theme }) => theme.transition};
  z-index: 1;
`;

const MainLinkerItem = styled.li`
  position: relative;
  width: 16%;
  height: 40px;
  margin: ${({ divided }) => divided ? "0 10px 0 50px" : "0 10px"};
  background: ${({ background, theme }) => background || theme.gray1};
  border-radius: 5px;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 40px;
  }

  &:hover {
    opacity: 0.8;
  
    ${MainLinkerMsg} {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Main
