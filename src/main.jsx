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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch('http://localhost:5000/brandName')
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
        loader: () =>fetch('http://localhost:5000/brandName')
       

        
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
        path: "update/:id",
        element: <Update></Update>,
         loader:({params}) => fetch(`http://localhost:5000/brandName/${params.id}`)
        
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
