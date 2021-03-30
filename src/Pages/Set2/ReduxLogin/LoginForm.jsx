import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Button } from '../../../Shared/StyledTags';
import { flexCenter } from '../../../Styles/theme';
// import { SERVER_API } from '../../../Data/config';

const LoginForm = () => {
  const [loginValue, setLoginValue] = useState({
    id: "",
    pwd: "",
  })
  const { id, pwd } = loginValue;

  const updateLoginValue = (e) => {
    const { name, value } = e.target;
    setLoginValue({
      ...loginValue,
      [name]: value,
    })
  }

  const submitLoginValue = (e) => {
    e.preventDefault();
    alert(`로그인 성공! 아이디 ${id}님, 반갑습니다!`);
    window.location.href = "/";

    // <서버 req/res 로직>
    // fetch(SERVER_API, {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(loginValue)
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     alert(`로그인 성공! 아이디 ${id}님, 반갑습니다!`);
    //     window.location.href = "/";
    //   })
  }

  return (
    <FormWrapper onSubmit={(e) => submitLoginValue(e)}>
      <Input 
        name="id"
        type="text"
        placeholder="아이디를 입력하세요."
        value={id}
        onChange={(e) => updateLoginValue(e)}
        margin="0 0 20px"
      />
      <Input 
        name="pwd"
        type="password"
        placeholder="비밀번호를 입력하세요."
        value={pwd}
        onChange={(e) => updateLoginValue(e)}
        margin="0 0 20px"
      />
      <Button 
        type="submit"
        width="100%"
        padding="10px"
        background="#FDCC5C"
        backgroundHov="#FFE5A8"
      >
        로그인하기
      </Button>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  ${flexCenter};
  flex-direction: column;
  width: 350px;
  height: 300px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default LoginForm
