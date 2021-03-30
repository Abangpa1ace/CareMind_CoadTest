import { LOGGED_IN, LOGGED_OUT } from '../Action/LoginAction';

const initialLogin = {
  isLogin: true,
  userName: "TaeHyung Kim",
  userAvatar: "/Image/avatar.jpeg",
}

const LoginReducer = (state = initialLogin, action) => {
  switch(action.type) {
    case LOGGED_IN:
      return { 
        ...state, 
        isLogin: true,
      }

    case LOGGED_OUT:
      return {
        ...state,
        isLogin: false,
      }

    default:
      return state;
  }
}

export default LoginReducer;