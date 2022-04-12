import Login from "../../Models/Login";

interface SetLoginState {
  readonly type: 'SET_LOGIN_STATE',
  payload: Login
}

type AuthAction = SetLoginState

export type { AuthAction }