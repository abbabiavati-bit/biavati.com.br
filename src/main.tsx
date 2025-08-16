import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'
import { loadBrandFont } from '@/lib/fonts'

// Load brand font if configured via env
loadBrandFont()

const container = document.getElementById('root')!
createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
