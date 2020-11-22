import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ofr1 from "./ofr1";
import ofr2 from "./ofr2";
import Home from "./Home";

class Offer extends Component{
    render(){
        return(
            
            <Container className="mt-5">
                <div className="tytul_oferta"><h2>Świadczymy usługi z zakresu:</h2></div>
                <BrowserRouter>
                <Nav variant="tabs" defaultActiveKey="/Home">
                    <Nav.Link as={Link} to="/Home"></Nav.Link>
                    <Nav.Link as={Link} to="/ofr1">Podatkowa księga przychodów i rozchodów</Nav.Link>
                    <Nav.Link as={Link} to="/ofr2">Księgi rachunkowe</Nav.Link>
                </Nav>
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route path="/ofr1" component={ofr1} />
                    <Route path="/ofr2" component={ofr2} />
              </Switch>
                </BrowserRouter>
            </Container>
        );
    }
}
export default Offer;