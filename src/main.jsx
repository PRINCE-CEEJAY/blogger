import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import store from './app/store';
import { Provider } from 'react-redux';
import Navbar from "./pages/Navbar"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <Navbar/>
        <App />
      </Provider>
    </Router>
  </StrictMode>,
);
