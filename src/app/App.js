import { GlobalStyles } from './share/styles/GlobalStyles'
import { AppRouter } from './share/routes/AppRoutes';
import { Whatsapp } from './share/ultis/Whatsapp';

export const App = () => {
  return (
    <div className="App">
      <GlobalStyles/>
      <Whatsapp />
      <AppRouter/>
    </div>
  );
}