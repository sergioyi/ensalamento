import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//  1-  configuurando o router
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Curso from './components/curso';
import Periodo from './components/periodo';
import Calendario from './components/calendario';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "Curso",
        element: <Curso/>
      },
      {
        path: "Periodo",
        element: <Periodo/>
      },
      {
        path: "Calendario",
        element: <Calendario/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
