import React from "react";
import {
  Routes as ReactRoutes,
  Route as ReactRoute,
} from "react-router-dom";
import Routes from "./Routes";

const AppRouter: React.FC = () => {

  return (<ReactRoutes>
    {
      Routes.map((route, index) => {
        if (route.isProtected) {
          return <ReactRoute
            key={index}
            path={route.path}
            element={<></>}
          />
        }
        return <ReactRoute
          key={index}
          path={route.path}
          element={React.createElement(route.component)}
        />
      })
    }
  </ReactRoutes>)
}

export default AppRouter