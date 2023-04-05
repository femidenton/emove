import './App.css'
import SuccessModal from './Components/SuccessModal'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './protected/protected'
import Dashboard from './components/dashboard/main'
import Landing from './components/landing/main'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { useState } from 'react'
import { UserContext } from './context/userContext'
import VerifyEmail from './pages/VerifyEmail';
import VerifyEmailSuccess from './pages/Redirect'

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/users/verify" element={<VerifyEmailSuccess />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App
