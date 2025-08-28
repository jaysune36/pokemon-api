
import { useState,useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { pokeListAPI } from './components/PokeAPI';
import Home from './components/Home';
import PokeCardList from './components/PokeCardList';

function App() {

  const [pokeList, setPokeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const pokeListArr = [];
    
    pokeListAPI.get(pokeListArr, setIsLoading);
    setPokeList(pokeListArr);
    
      
    
  }, [])

  return (
    <Router >
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">PokeList API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {isLoading ? (
            <Home />
        ) : (
            <PokeCardList pokeList={pokeList} />
        )
      }
    </Router>
          
      
  );
}

export default App;
