import { useEffect, useRef, useState } from "react";
import "./App.css";

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainForm from './Components/MainForm'
import Retrieve from "./Components/Retrieve";
import Layout from "./Components/Layout";
function App() {
  document.title="Directory App"
  let router=createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children:[
        {
          path:'/',
          element: <MainForm />
        },
        {
          path:'retrieve',
          element: <Retrieve />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
