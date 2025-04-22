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
  {path:'/solucao', element:<Solution/>},
  {path:'/FAQ', element:<FAQ/>},
  {path:'/simulator', element:<Simulator/>},
  {path:'/login', element:<Login/>},
  {path:'/colaboradores', element:<Team/>},
  {path:'/incluir-proposta', element:<Proposal/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
