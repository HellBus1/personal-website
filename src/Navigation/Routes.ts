import Route from "../Models/Route"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"

const Routes: Route[] = [
  {
    path: 'login',
    component: Login,
    isExact: true,
    isProtected: false,
  },
  {
    path: 'register',
    component: Register,
    isExact: true,
    isProtected: false
  }
]

export default Routes