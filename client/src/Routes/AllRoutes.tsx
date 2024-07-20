import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../Components/Loader.tsx";
import UserDashboardLayout from "../Layouts/Dashboard/UserDashboardLayout/index.tsx";

const Login = lazy(() => import("../Pages/SharedPages/Login"));
const Home = lazy(() => import("../Pages/SharedPages/Home"));

function AllRoutes() {
  interface RouteConfig {
    path: string;
    element: any;
  }
  const routes: RouteConfig[] = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ];
  return (
    <Router>
      <Routes>
        {routes.map((route: RouteConfig, index: number) => (
          <Route
            key={index}
            path={route.path}
            element={
              <UserDashboardLayout>
                <Suspense fallback={<Loader />}>{route.element}</Suspense>
              </UserDashboardLayout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default AllRoutes;
