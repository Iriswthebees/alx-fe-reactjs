import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import your components
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Routing for your pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Original Vite Starter UI */}
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>

              <h1 style={{ textAlign: 'center' }}>Vite + React</h1>

              <div className="card" style={{ textAlign: 'center' }}>
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>

              <p className="read-the-docs" style={{ textAlign: 'center' }}>
                Click on the Vite and React logos to learn more
              </p>

              {/* Your Home page content */}
              <Home />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  )
}

export default App
