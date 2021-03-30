import { css } from 'styled-components';

const theme = {
  widthWeb: '1400px',
  widthMobile: '768px',
  gray0: '#F4F4F4',
  gray1: '#B0B0B0',
  gray2: '#636363',
  boxShadow: '3px 3px 5px 1px #cccccc',
  transition: 'all .3s ease',
}

export default theme;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCenterStart = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;