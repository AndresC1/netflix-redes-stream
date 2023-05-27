import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './page/layout'
import Inicio from './page/inicio'
import ViewMovie from './page/viewMovie'
import PlayMovie from './page/playMovie'

const rutas = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Inicio/>
      },
      {
        path: '/movie/:idMovie',
        element: <ViewMovie/>
      }
    ]
  },
  {
    path: '/movie/:idMovie/play',
    element: <PlayMovie/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rutas}/>
  </React.StrictMode>,
)
