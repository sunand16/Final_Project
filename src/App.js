//import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
     <Header/>
      <Nav/>
      <Main />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
