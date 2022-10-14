import { GlobalStyles } from './share/styles/GlobalStyles'
import { AppRouter } from './share/routes/AppRoutes';

export const App = () => {
  return (
    <div className="App">
      <GlobalStyles/>
      <AppRouter/>
    </div>
  );
}