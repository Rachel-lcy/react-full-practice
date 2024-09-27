import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './website/App.jsx'
import './website/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
