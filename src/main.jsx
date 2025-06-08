import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routers/route.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        {/* toast  */}
        <Toaster />

        <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
