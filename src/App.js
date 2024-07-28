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
          {/*navigate to login if user not login */}
          <Route path='/' element={<Login/>} />
          {/* navigate to home if user login already */}
          <Route path='/home' element={<Home/>} />
        </Routes>
      </DashboardContextProvider>
    </BrowserRouter>
  );
}

export default App;
