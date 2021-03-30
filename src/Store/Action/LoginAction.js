export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

export const setLoggedIn = () => {
  return {
    type: LOGGED_IN,
  }
}

export const setLoggedOut = () => {
  return {
    type: LOGGED_OUT,
  }
}