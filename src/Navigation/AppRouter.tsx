import Route from "../Models/Route"
import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route as ReactRoute,
} from "react-router-dom";
import Routes from "./Routes";

const AppRouter: React.FC = () => {
  const isAdmin = false;

  return (<ReactRoutes>
    {
      Routes.map((route, index) => {
        if (route.isProtected) {
          return <ReactRoute
            path={route.path}
            element={<></>}
          />
        }
        return <ReactRoute
          path={route.path}
          element={route.component}
        />
      })
    }
  </ReactRoutes>)
}

export default AppRouter