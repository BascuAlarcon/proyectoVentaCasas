import './App.css'; 
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Galeria } from './components/Galeria';
import { Inicio } from './components/Inicio'; 
import NavbarComponent from './components/Navbar/Navbar';
import { Plano } from './components/Plano';
import { Ubicacion } from './components/Ubicacion';

function App() {
  return (
    <div className="App"> 
      <NavbarComponent></NavbarComponent>
      <Inicio></Inicio>
      <Galeria></Galeria>
      <Plano></Plano>
      <Ubicacion></Ubicacion>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
