//import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './components/Header';
//import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
   <>
    {/* NEED TO ADD HOMEPAGE COMPONENT HERE INSTEAD OF ALL INDIVIDUAL COMPONENTS */}
     <Header/>
     {/* <Nav/> */}
    
     <Main />
     <Footer/>
   </>
  );
}

export default App;
