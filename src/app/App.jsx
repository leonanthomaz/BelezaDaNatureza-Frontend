import React from 'react';
import { GlobalStyles } from './sharing/styles/GlobalStyles'
import { AppRouter } from './sharing/routes/AppRoutes';
import { Whatsapp } from './components/Whatsapp';

export const App = () => {
  return (
    <div className="App">
      <GlobalStyles/>
      <Whatsapp />
      <AppRouter/>
    </div>
  );
}