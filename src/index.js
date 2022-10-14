import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { CartProvider } from './app/share/contexts/cart';
import { StoreProvider } from './app/share/contexts/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StoreProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </StoreProvider>
  </React.StrictMode>
);
