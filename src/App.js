import './App.css';
import Map from './components/googlemap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import UserPanel from './components/userpanel';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<p>Ir al panel <Link to={'/panel'}>IR!!!</Link></p>} />
            <Route path='/panel' element={<UserPanel />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
