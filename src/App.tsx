import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';
import { Header } from './components/Header';

import { DrinkContextProvider } from './contexts/DrinkContext';

import CreateGlobalStyle from './styles/global';

function App() {
  return (
    <>
      <CreateGlobalStyle />
      <Router>
        <DrinkContextProvider>
          <Header />
          <Routes />
        </DrinkContextProvider>
      </Router>
    </>
  );
}

export default App;
