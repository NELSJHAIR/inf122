import './App.css';
import Login from './components/Login';
import Registrar from './components/Registrar';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Navbar/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/registro' element={<Registrar/>}/>
            <Route path='/perfil' element={<Login/>}/>
          </Routes>  
        </div>  
      </Router>      
    </div>
  );
}

export default App;
