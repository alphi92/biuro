import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from "./img2.jpg";
import img4 from "./img4.jpg";
import img3 from "./img3.jpg";

import {Carousel} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class Home extends Component{
    render(){
        return(
          <Container className="mt-5">
            <Carousel indicators={false} controls={false} interval={2000}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="BIURO RACHUNKOWE ANDRZEJKA"
                />
                <Carousel.Caption className="mt-2">
                  <h3>POMOC W NAJTRUDNIEJSZYCH SPRAWACH</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="BIURO RACHUNKOWE ANDRZEJKA"
                />

                <Carousel.Caption>
                  <h3>PEŁNA KSIĘGOWOŚĆ</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img4}
                  alt="BIURO RACHUNKOWE ANDRZEJKA"
                />

                <Carousel.Caption>
                  <h3>PROFESJONALIZM</h3>
                </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
              <div className="cytat"><p>„Urząd skarbowy nic nie poradzi, gdy Andrzej Bardadin księgi prowadzi."</p></div>
              <div className="listaZalet">
                <Row>
                  <Col><p>Pełna księgowość</p></Col>
                  <Col><p>Prowadzenie księgi przychodów i rozchodów</p></Col>
                  <Col><p>Obsługa kadrowo-płacowa</p></Col>
                  <Col><p>Rozliczenia: <ul>
                    <li>PIT</li>
                    <li>CIT</li>
                    <li>VAT</li>
                    <li>ZUS</li>
                    <li>PFRON</li>
                    </ul></p></Col>
                  <Col><p>Rozliczanie rolników</p></Col>
                </Row>
              </div>  
            </Container>
         );
      }
}
export default Home;