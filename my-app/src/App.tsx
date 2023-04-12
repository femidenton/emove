import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Admin, User } from './protected/protected'
import Dashboard from './components/dashboard/main'
import Landing from './components/landing/main'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { useState } from 'react'
import { UserContext } from './context/userContext'
import VerifyEmail from './pages/VerifyEmail'
import VerifyEmailSuccess from './pages/Redirect'
import ForgotPassword from './components/ForgotPassword'
import EmailConfirmation from './pages/EmailConfirm'
import ResetPassword from './pages/ResetPassword'
import UserDashboard from './pages/userDashboard'

function App() {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route
            path="/verify-forgotten-password"
            element={<EmailConfirmation />}
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/users/verify" element={<VerifyEmailSuccess />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user/*"
            element={
              <User>
                <UserDashboard />
              </User>
            }
          />
          <Route
            path="/admin/*"
            element={
              <Admin>
                <Dashboard />
              </Admin>
            }
          />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App
