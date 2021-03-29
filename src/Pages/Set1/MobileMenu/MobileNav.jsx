import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const MobileNav = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <Mobilenavbar>
      <NavContainer>
        <Link to="/" >Logo (to Main)</Link>
        <button onClick={() => setIsShowMenu(!isShowMenu)} >
          <HiMenu />
        </button>
      </NavContainer>
      <NavMenu show={isShowMenu} >
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </NavMenu>
    </Mobilenavbar>
  )
}

const Mobilenavbar = styled.nav`
  background: #333333;
  position: relative;
  overflow: hidden;

  a, button {
    display: block;
    padding: 14px 16px;
    color: #ffffff;
    svg { fill: #ffffff; };
    
    &:hover {
      background: #ddd;
      color: #000000;
      svg { fill: #000000 };
    }
  }
`;

const NavContainer = styled.div`
  height: 50px;

  a {
    height: 100%;
    background-color: #4CAF50;
  }
  
  button {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background: #000000;
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.widthMobile}) {
      display: block;
    }
  }
`;

const NavMenu = styled.div`
  display: block;  

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    display: ${({ show }) => show ? 'block' : 'none'};
  }
`;

export default MobileNav
