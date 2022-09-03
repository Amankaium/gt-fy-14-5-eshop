import './App.css';
import Main from './components/Main/Main';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Main/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Container>
      <BrowserRouter>         
          <Nav/>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/about" element={<About/>}/>
          </Routes>
          

      </BrowserRouter>
    </Container>
  );
}

export default App;
