import home from './imagenes/home.png';
import './App.css';
import Button from 'react-bootstrap/Button';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './componentes/Inicio';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';



function App() {
  return (
    <Router>
    <div className="img">
    <img src= {home}/>
   <div className="container mt-5">
     </div>
   <div className="btn-group">
     <Link to="/Inicio" className="btn btn-dark">
     Inicio
    </Link>
    <Link to="/Contacto" className="btn btn-dark">
      Contacto
</Link>
<Link to="/Proyectos" className="btn btn-dark">
  Proyectos
</Link>

    
     
   </div>
   </div>
   <Switch>
     <Route path="/Inicio">
       <Inicio></Inicio>
     </Route>
     <Route path="/Proyectos">
<Proyectos></Proyectos>
     </Route>
     <Route path="/Contacto">
<Contacto></Contacto>
     </Route>
     </Switch>
   </Router>
  
  )
   }

 
export default App;