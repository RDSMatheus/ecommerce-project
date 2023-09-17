import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Components/Login/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/Login/SignIn/SignIn';
import { GlobalContext } from './GlobalContext';

const App = () => {
  return (
    <>
      <GlobalContext>
        <Header />
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
        <Footer />
      </GlobalContext>
    </>
  );
};

export default App;
