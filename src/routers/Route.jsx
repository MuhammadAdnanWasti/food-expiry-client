import {
  createBrowserRouter,
 
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Auth from "../layouts/Auth";
import Login from "../pages/Auths/Login";
import Register from "../pages/Auths/Register";
import NotFound from "../pages/NotFound";

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
     children:[
        {index:true, Component:Home},
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