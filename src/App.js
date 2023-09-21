import './App.css'; 
import { Footer } from './components/Footer'; 
import NavbarComponent from './components/Navbar/Navbar';  
import { Route, Routes } from 'react-router-dom';
import { Privacidad } from './pages/Politicas';
import { Home } from './pages/Home/Home'; 

function App() {
  return ( 
      <div className="App"> 
        <NavbarComponent/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/proyectoVentaCasas' element={<Home/>}/>
          <Route path='/politicas' element={<Privacidad/>}/> 
        </Routes> 
        <Footer/>
      </div> 
  );
}

export default App;
