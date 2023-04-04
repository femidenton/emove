import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Forgotpassword from './pages/Forgotpassword'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Redirect from './pages/Redirect'
import SignUp from './pages/SignUp'
import VerifyEmail from './pages/VerifyEmail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/users/verify" element={<Redirect/>}/>
          <Route path="/forgot-password" element={<Forgotpassword/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
