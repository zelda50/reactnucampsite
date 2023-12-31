import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/asset/img 2/logo.png';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
          <Container>
              <NavbarBrand href='/'>
                  <img src={NucampLogo} alt='nucamp logo' />
              </NavbarBrand>
          </Container>
      </Navbar>
      I'm ready for Workshop!
    </div>
  );
}

export default App;
