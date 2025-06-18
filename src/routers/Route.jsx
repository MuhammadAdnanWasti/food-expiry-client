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
import FoodDetails from "../pages/FoodDetails";
import Update from "../pages/Update";

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
     children:[
        {index:true, Component:Home},
        {path:'fridge',Component:Fridge,
          loader:()=>fetch('http://localhost:3000/foods')
        },
        {
          path:'foodDetails/:id',Component:FoodDetails,
          loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`)
        },
        {path:'addFood', element:<PrivateRoute><AddFood></AddFood></PrivateRoute>},
        {path:'myItems', element:<PrivateRoute><MyItems></MyItems></PrivateRoute>,
           loader:()=>fetch('http://localhost:3000/foods')
        },
        {
          path:'update/:id', element:<PrivateRoute><Update></Update></PrivateRoute>,
           loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`)
        }
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