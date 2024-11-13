
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './iam/pages/Login'
import { Register } from './iam/pages/Register'
import { Home } from './public/pages/home/Home'
import { Reports } from './wallet/pages/reports/Reports'
import { Operations } from './wallet/pages/operations/Operations'

function App() {


  return (
    <>
      <h1 className='p-4 bg-red-400'>Vite + React + tailwindcss</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
