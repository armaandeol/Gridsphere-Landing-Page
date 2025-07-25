import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Features } from './pages/Features'
import { ScrollToTop } from './components/ScrollToTop'
import {Solution} from './pages/Solution'
import Contact from './pages/Contact'
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/a" element={<Solution/>} />
      </Routes>
    </Router>
  )
}