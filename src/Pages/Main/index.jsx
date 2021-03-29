import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../Styles/theme';

const Main = () => {
  return (
    <MainPage>
      <h1>CareMind Coading-Test</h1>
      <p>안녕하십니까, 저는 케어마인드 프론트엔드 개발자 채용에 지원한 김태형입니다.</p>
      <MainLinker>

      </MainLinker>
    </MainPage>
  )
}

const MainPage = styled.main`
  height: 100vh;
  padding: 100px;

  p {
    margin: 30px 0 0;
  }
`;

const MainLinker = styled.ul`
  ${flexCenter};
  margin: 80px 0 0;
  border: 1px solid red;
`;

export default Main
