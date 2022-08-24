import './App.css';
import Main from './components/Main/Main';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Main/Nav';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>         
        <Nav/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
