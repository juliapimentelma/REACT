import './App.css'
import Login from './login/Login.jsx'
import HomePage from './homePage/HomePage.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
        <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
