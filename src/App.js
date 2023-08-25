import "./App.css"
import LoginPage from "./Login/LoginPage"
import SignupPage from "./Login/SignupPage"
import ContactUs from "./Main/ContactUs"
import HeroSection from "./Main/HeroSection"
import MainPage from "./Main/MainPage"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
