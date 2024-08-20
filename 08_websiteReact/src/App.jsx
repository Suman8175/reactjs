import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Contact, NavBar } from './component'
import Footer from './component/footer/Footer'

function App() {


  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
