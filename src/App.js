import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NewDogForm from './components/NewDogForm';
import Login from './components/Login'
import Signup from './components/Signup'
import DogList from './components/DogList'
import DogDetails from './components/DogDetails'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <div className='App'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signin' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/new-dog' element={<NewDogForm/>} />
            <Route path='/dogs' element={<DogList/>} />
            <Route path='/dogs/:id' element={<DogDetails/>}/>
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
