import { StrictMode } from 'react'
import App from './App.jsx'

import './index.css'

import ReactDOM from 'react-dom/client'




ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,
)
