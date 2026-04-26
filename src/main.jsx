import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/moni-traka" element={<ProjectDetailPage projectSlug="moni-traka" />} />
        <Route path="/i-see-you" element={<ProjectDetailPage projectSlug="i-see-you" />} />
        <Route path="/rainbow-falls" element={<ProjectDetailPage projectSlug="rainbow-falls" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
