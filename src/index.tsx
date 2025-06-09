import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import LoginPanel from './components/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPanel />
  </StrictMode>,
)