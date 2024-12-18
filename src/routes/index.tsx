import { createBrowserRouter } from "react-router-dom";
import { routes } from "../constants/routes";
import { Home } from "./home/Home";
  
export const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <Home/>,
  },
  {
    path: '*',
    element: <Home/>,
  }
]);