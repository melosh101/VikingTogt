import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { TestPage } from './test/page.jsx'

const router = createBrowserRouter([
   {
    path: "/",
    element: <App />
   },
   {
    path: "/test",
    element: <TestPage/>
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
