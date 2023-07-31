import "./App.css"
import HeroSection from "./Main/HeroSection"
import MainPage from "./Main/MainPage"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
