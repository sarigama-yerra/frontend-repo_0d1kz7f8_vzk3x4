import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Orange from './pages/Orange'
import Strawberry from './pages/Strawberry'
import Kiwi from './pages/Kiwi'
import Pineapple from './pages/Pineapple'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/orange" element={<Orange />} />
        <Route path="/strawberry" element={<Strawberry />} />
        <Route path="/kiwi" element={<Kiwi />} />
        <Route path="/pineapple" element={<Pineapple />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
