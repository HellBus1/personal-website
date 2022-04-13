
import { AuthAction } from "../action/auth_action";
import { AuthState } from "../state";

const initialState: AuthState = {
  accessToken: "access_token",
  refreshToken: "refresh_token"
}

const AuthReducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case 'SET_LOGIN_STATE': {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default AuthReducer