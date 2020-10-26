import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import Offer from "./components/Offer";
import Reference from "./components/Reference";
import Contact from "./components/Contact";
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import logo2 from "./logo2.jpg";

class App extends Component{

  render(){
    return (
      <Container fluid>
          <BrowserRouter>
              <header>
                <Nav className="justify-content-end" activeKey="/home">
                  <Navbar.Brand ><img src={logo2} alt="logotyp"/> </Navbar.Brand>
                  <Nav.Link as={Link} to="/"></Nav.Link>
                  <Nav.Link as={Link} to="/home">Strona główna</Nav.Link>
                  <Nav.Link as={Link} to="/about">O nas</Nav.Link>
                  <Nav.Link as={Link} to="/offer">Oferta</Nav.Link>
                  <Nav.Link as={Link} to="/reference">Referencje</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
                </Nav>
              </header>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/offer" component={Offer} />
                  <Route path="/reference" component={Reference} />
                  <Route path="/contact" component={Contact} />
              </Switch>
            </BrowserRouter>
        </Container>
    );
  }
}

export default App;