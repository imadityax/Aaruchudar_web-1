import React from 'react'
import { createRoot } from 'react-dom/client'
import AaruchudarFranchise from './AaruchudarFranchise'
import './index.css'

function App(){
  return <AaruchudarFranchise />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
