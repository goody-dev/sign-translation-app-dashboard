import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css'

import AuthProvider, { useAuth } from './provider/authProvider.jsx'
import Routes from './router/routes.jsx'

import Header from './Components/Header.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import SignUp from './Pages/SignUp.jsx'
import SignIn from './Pages/SignIn.jsx'
import TranslateText from './Pages/TranslateText.jsx'
import ValidateEntry from './Pages/ValidateEntry.jsx'
import ContributeText from './Pages/ContributeText.jsx';
import ContributeVideo from './Pages/ContributeVideo.jsx';
import TranslateVideo from './Pages/TranslateVideo.jsx';

function App() {
  return (
    <AuthProvider>
      <Routes>
      </Routes>
    </AuthProvider>
  )
}

export default App