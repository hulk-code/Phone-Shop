import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Product from './Component/BrandName/product';
import DetailsProduct from './Component/DetailsProduct/DetailsProduct';
import Add from './Component/Pages/Add';
import Update from './Component/Pages/Update';
import Login from './Component/FireBaseAuth/Login';
import Register from './Component/FireBaseAuth/Register';
import AuthProvider from './Component/FireBaseAuth/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Mycart from './Component/Mycart/Mycart';
import ErrorPage from './Component/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
       
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
        loader: ({params}) =>fetch(`https://phone-shop-server-9jkzunhkt-sumiyaakhi.vercel.app/mobilebrand/${params.id}`)
       

        
      },
      {
        path: "/detailsproduct/:productId",
        element: <PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>,
               
      },
      {
        path: "add",
        element: <PrivateRoute><Add></Add></PrivateRoute>,
     
        
      },
      {
        path: "/mycart",
        element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
     
        
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,        
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
