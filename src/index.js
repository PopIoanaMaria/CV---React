import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './components/NavBar';
import Profile from './components/Profile';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Profile /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
