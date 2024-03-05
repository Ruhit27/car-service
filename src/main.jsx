import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Checkout from './components/checkout/Checkout.jsx';
import Bookings from './components/bookings/Bookings.jsx';
import PrivateRoute from './components/privateroute/PrivateRoute.jsx';
import About from './components/About/About.jsx';
import Services from './components/services/Services.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
    
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:'/checkout/:id',
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path:'/bookings',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <AuthProvider>
    
    <React.StrictMode>
     <RouterProvider  router={router}></RouterProvider>
  </React.StrictMode>

  </AuthProvider>
  
  ,
)
