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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
       
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
        loader: ({params}) =>fetch(`http://localhost:5000/mobilebrand/${params.id}`)
       

        
      },
      {
        path: "/detailsproduct/:details",
        element: <DetailsProduct></DetailsProduct>,
        loader: () =>fetch('http://localhost:5000/brandName')
        
      },
      {
        path: "add",
        element: <Add></Add>,
     
        
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
       
        
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
