import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Paragraph } from '../../../Shared/StyledTags';
import { flexCenterStart } from '../../../Styles/theme';

const LoginInfo = () => {
  const { userName, userAvatar } = useSelector(state => state.login);

  return (
    <InfoWrapper>
      <Paragraph
        margin="0 0 50px"
        fontSize="24px"  
      >
        <strong>Welcome, Here is Care-Mind Coading Test App!</strong>
      </Paragraph>
      <InfoDetail>
        <img src={userAvatar} alt="user-avatar-img" />
        <Paragraph>Name: {userName}</Paragraph>
      </InfoDetail>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.section`
  text-align: center;
`;

const InfoDetail = styled.div`
  ${flexCenterStart};
  width: 600px;
  padding: 20px;
  margin: 0 auto;
  background: ${({ theme }) => theme.gray0};
  box-shadow: ${({ theme }) => theme.boxShadow};

  img {
    width: 250px;
    height: 300px;
    object-fit: cover;
    margin: 0 30px 0 0;
  }
`;

export default LoginInfo
