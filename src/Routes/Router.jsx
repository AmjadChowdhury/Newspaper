import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : "/",
            element: <Home></Home>,
            loader : () => fetch('news.json')
        },
        {
            path: "/news/:id",
            element : <h1>Hello</h1>
        },
        {
          path : "/login",
          element : <Login></Login>
        },
        {
          path : "/register",
          element : <Register></Register>
        }
      ]
    },
]);

export default router