import './App.css'
import { Routes, Route,  } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { FormPage } from './pages/FormPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/form" element={<FormPage />} />
      {/* Agrega más rutas aquí */}
    </Routes>
  )
}

export default App
