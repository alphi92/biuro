import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import logo3 from "./logo3.png";
import ofr1 from "./components/ofr1";
import ofr2 from "./components/ofr2";

class App extends Component{

  render(){
    return (
      <Container>
          <BrowserRouter>
              <header>
                <Navbar collapseOnSelect expand="lg" bg="transparent">
                  <Navbar.Brand><img src={logo3} alt="logotyp"/></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar-nav ml-auto">
                      <Nav.Link as={Link} to="/"></Nav.Link>
                      <Nav.Link as={Link} to="/home">Strona główna</Nav.Link>
                      <Nav.Link as={Link} to="/about">O nas</Nav.Link>
                      <NavDropdown title="Oferta" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/ofr1">Księga podatkowa</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/ofr2">Księga rachunkowa</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </header>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/ofr1" component={ofr1} />
                  <Route path="/ofr2" component={ofr2} />
                  <Route path="/contact" component={Contact} />
              </Switch>
            </BrowserRouter>
            
        </Container>
    );
  }
}

export default App;
