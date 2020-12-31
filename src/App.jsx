import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/vendor/font-awesome/css/font-awesome.css";
import './assets/scss/global.scss';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Main, ForgotPassword, Login, Register,
} from './views/views';

import googleIcon from './assets/img/google.svg';
const App = () => (
  <Router>
    <Route exact path='/' render={ () => <Main /> } />
    <Route path='/register' render={ () => <Register /> } />
    <Route path='/login' render={ () => <Login /> } />
    <Route path='/forgot-password' render={ () => <ForgotPassword /> } /> 
  </Router>
);

export default App;