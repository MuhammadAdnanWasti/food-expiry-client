import {
  createBrowserRouter,
 
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Auth from "../layouts/Auth";
import Login from "../pages/Auths/Login";
import Register from "../pages/Auths/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood";
import MyItems from "../pages/MyItems";
import Fridge from "../pages/Fridge";

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
     children:[
        {index:true, Component:Home},
        {path:'fridge',Component:Fridge},
        {path:'addFood', element:<PrivateRoute><AddFood></AddFood></PrivateRoute>},
        {path:'myItems', element:<PrivateRoute><MyItems></MyItems></PrivateRoute>},
     ]
  },
  {
    path: "/auth",
    Component: Auth,
    children:[
      {
path:'/auth/login',
Component:Login
},
      {
path:'/auth/register',
Component: Register

}
    ]
  },
  
  {
    path: "/*",
    Component:NotFound
  }
]);

export default router