import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Solution from './pages/Solution/Solution.jsx'
import FAQ from './pages/FAQ/FAQ.jsx'
import Simulator from './pages/Simulator/Simulator.jsx'
import Login from './pages/Login/Login.jsx'
import Team from './pages/Team/Team.jsx'
import Proposal from './pages/Proposal/Proposal.jsx'

const router = createBrowserRouter([
  {path:"/", element:<Home/>},
  {path:'/solucao/:id', element:<Solution/>},
  {path:'/FAQ/:id', element:<FAQ/>},
  {path:'/simulator/:id', element:<Simulator/>},
  {path:'/incluir-proposta/:id', element:<Proposal/>},
  {path:'/login', element:<Login/>},
  {path:'/colaboradores', element:<Team/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
