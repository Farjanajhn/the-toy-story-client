import { createBrowserRouter } from "react-router-dom";
import AddToy from "../components/Home/Home/AddToy";
import AllToy from "../components/Home/Home/AllToy";
import Blogs from "../components/Home/Home/Blogs";
import Home from "../components/Home/Home/Home";
import MyToy from "../components/Home/Home/MyToy";
import Login from "../components/Home/Login";
import Registration from "../components/Home/Registration";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'registration',
        element:<Registration></Registration>
      },
      {
        path: 'myToy',
        element:<PrivateRoute> <MyToy></MyToy></PrivateRoute>

      },
      {
        path: 'allToy',
        element:<AllToy></AllToy>
      },
      {
        path: 'add',
        element:<AddToy></AddToy>

      },
      {
        path: 'blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);


export default router;