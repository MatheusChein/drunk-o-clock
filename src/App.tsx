import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes';
import { Header } from './components/Header'
import CreateGlobalStyle from './styles/global'

function App() {
  return (
    <>
      <CreateGlobalStyle />
      <Header />
      <Router>
        <Routes/>
      </Router>
    </>
  );
}

export default App;
