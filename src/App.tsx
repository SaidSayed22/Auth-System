


import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import Register from './pages/Register'
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';

const App: React.FC = () => {

  return (
    <>



       <AuthProvider>
        <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Routes>
  </AuthProvider>
 
    </>
  )
}

export default App
