import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import PasswordGenartor from './components/PasswordGenartor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PasswordGenartor/>
  </StrictMode>,
)
