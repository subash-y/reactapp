import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login.jsx'
import Home from './Home.jsx'
import NotFound from './NotFound.jsx'
import Counter from './Counter.jsx'
import Post from './Post.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <Login/>
  },
  
  {
    path:"/counter",
    element: <Counter/>
  },
  {
    //Dynamic path
    path:"/post/:id",
    element: <Post/>
  },
    {
    path: '*',   // catch-all route
    element: <NotFound/>
  }

]);

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router}/>
  
)
