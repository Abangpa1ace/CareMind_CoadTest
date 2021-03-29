import { css } from 'styled-components';

const theme = {
  widthWeb: '1400px',
  widthMobile: '768px',
  gray0: '#F4F4F4',
  gray1: '#B0B0B0',
  gray2: '#636363',
  transition: 'all .3s ease',
}

export default theme;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexAlign = css`
  display: flex;
  align-items: center;
`;