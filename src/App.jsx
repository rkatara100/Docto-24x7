import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Doctors from './components/pages/Doctors';
import Login from './components/pages/Login';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import MyProfile from './components/pages/MyProfile';
import MyAppointment from './components/pages/MyAppointment';
import Appointment from './components/pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myProfile' element={<MyProfile />} />
        <Route path='/myAppointment' element={<MyAppointment />} />
        <Route path='/appointment/:docId' element={<Appointment />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
