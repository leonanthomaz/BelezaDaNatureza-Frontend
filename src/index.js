import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './app/share/contexts/cart';
import { StoreProvider } from './app/share/contexts/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </StoreProvider>
  </React.StrictMode>
);
