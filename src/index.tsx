import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './styles/other.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
