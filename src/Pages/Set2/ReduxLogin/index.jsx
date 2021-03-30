import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn, setLoggedOut } from '../../../Store/Action/LoginAction';
import { flexCenter } from '../../../Styles/theme';
import LoginInfo from './LoginInfo';
import LoginForm from './LoginForm';

const isToken = localStorage.getItem("JWT_KEY");

const ReduxLogin = () => {
  const { isLogin } = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isToken ? setLoggedIn() : setLoggedOut())
  }, [dispatch])

  return (
    <ReduxLoginPage>
      {isLogin ? <LoginInfo /> : <LoginForm />}
    </ReduxLoginPage>
  )
}

const ReduxLoginPage = styled.main`
  ${flexCenter};
  height: 100vh;
`;

export default ReduxLogin
