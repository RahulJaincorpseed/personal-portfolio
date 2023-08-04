import "./App.css"
import ArticleHomePage from "./Articles/ArticleHomePage"
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
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/articles" element={<ArticleHomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
