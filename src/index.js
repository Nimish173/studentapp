import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import StepContext from './StepContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StepContext>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StepContext>
);

