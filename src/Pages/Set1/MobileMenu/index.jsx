import React from 'react';
import styled from 'styled-components';
import MobileNav from './MobileNav'

const MobileMenu = () => {
  return (
    <>
      <MobileNav />
      <MobileContent>
        <h2>Vertical Mobile Navbar</h2>
        <p>This example demonstrates how a navigation menu on a mobile/smart phone could look like.</p>
        <p>Click on the hamburger menu (three bars) in the top right corner, to toggle the menu.</p>
      </MobileContent>
    </>
  )
}

const MobileContent = styled.section`
  min-height: 95vh;
  padding: 40px;
  background: ${({ theme }) => theme.gray2};
  color: #ffffff;

  p {
    margin: 40px 0 0;
  }
`;

export default MobileMenu
