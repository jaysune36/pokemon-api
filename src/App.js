
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
import DetailsPage from './components/DetailsPage';

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
          <Navbar.Brand href="/">PokeList API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
          <Route path='/poke-details' element={<DetailsPage/>}>

          </Route>
        {isLoading ? (
            <Route path='/' element={<Home />}>
              
            </Route> 
        ) : (
          <Route path='/' element={<PokeCardList path='/' pokeList={pokeList} />} >
          </Route>
           
        )
      }
      </Routes>
      
    </Router>
          
      
  );
}

export default App;
