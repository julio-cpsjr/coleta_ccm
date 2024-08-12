import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import Measure from './components/pages/Measure'
import Maintenances from './components/pages/Maintenances'
import NewMaintenance from './components/pages/NewMaintenance'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Maintenance from './components/pages/Maintenance'


function App() {


  return (
    <Container customClass="min_height">
      <Router>
      <Navbar/>
       <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/measure" element={<Measure/>}/>
          <Route path="/maintenances" element={<Maintenances/>}/>
          <Route path="/maintenance/:id" element={<Maintenance/>}/>
          <Route path="/newmaintenance" element={<NewMaintenance/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/contact" element={<Contact/>}/>
       </Routes>
      <Footer/>
    </Router>
      </Container> 
    
  );
}

export default App;
