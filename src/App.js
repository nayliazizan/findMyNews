import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { DashboardContextProvider } from './context/DashboardContext';

function App() {
  return (
    <BrowserRouter>
      <DashboardContextProvider>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </DashboardContextProvider>
    </BrowserRouter>
  );
}

export default App;
