import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Solution from './pages/Solution/Solution.jsx'
import FAQ from './pages/FAQ/FAQ.jsx'

const router = createBrowserRouter([
  {path:"/", element:<Home/>},
  {path:'/solucao', element:<Solution/>},
  {path:'/FAQ', element:<FAQ/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
