import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ElevatorProvider } from './components/Context/Elevator'


ReactDOM.render(
  <ElevatorProvider>
    <App />
  </ElevatorProvider>
  ,
  document.getElementById('root')
);
