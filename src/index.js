import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery'; // Jquery


import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import 'bootstrap/dist/js/bootstrap'; // Bootstrap
import './css/fonts.css'; // Fonts
import './css/custom_style.css'; // Custom style
import './css/password_rangle_slider.css';

import Header from './components/Header';
import Title from './components/Title';
import PasswordGenerate from './components/PasswordGenerate'
import Footer from './components/Footer'




ReactDOM.render(
  <React.StrictMode>
      <Header />
      <div className="container">
          <Title />
          <PasswordGenerate />
          <Footer />
      </div>
    {/*<App />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
