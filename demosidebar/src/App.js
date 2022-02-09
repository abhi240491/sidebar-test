import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/analytics' element={<Analytics/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;