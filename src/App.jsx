import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route , BrowserRouter as Router , Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, About, Projects, Contact} from './pages/index.js'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main >
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
