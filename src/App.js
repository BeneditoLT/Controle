
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componet/Pages/Home';
import Projetos from './componet/Pages/Projetos';
import Empresa from './componet/Pages/Empresa';
import Contato from './componet/Pages/Contato';
import Container from './componet/layout/Container';
import Navbar from './componet/layout/Navbar';
import Footer from './componet/layout/Footer';


function App() {
  return (
    <Router>
    
    <Navbar/>
    <Container customClass="min-height">
      <Routes>
        
        <Route path="/"      element={<Home/>}></Route>
        <Route path="/Projetos"element={<Projetos/>}></Route>
        <Route path="Empresa" element={<Empresa/>}></Route>
        <Route path="/Contato"element={<Contato/>}></Route>
        
      </Routes>
      </Container>
      <Footer/>
    </Router>
    );
}

export default App;
