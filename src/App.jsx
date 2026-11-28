import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/client/dashboard" element={<h1>Client Dashboard</h1>} />
        <Route path="/freelancer/dashboard" element={<h1>Freelancer Dashboard</h1>} />
        <Route path="/admin/dashboard" element={<h1>Admin Dashboard</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
