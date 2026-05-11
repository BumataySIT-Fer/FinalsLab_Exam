import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Links/About';
import Contact from './Links/Contact';
import Home from './Links/Home';
import NavBar from './Links/Navbar';


function App() {


  return (
    <>
      <BrowserRouter >
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      
      
      
      </BrowserRouter>



    </>
  )
}

export default App
