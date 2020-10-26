import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import img7 from "./img7.jpg";




class Offer extends Component{
    render(){
        return(
            <Container className="mt-5">
                <div className="oferta-img"><img
                  className="d-block w-100"
                  src={img7}
                  alt="BIURO RACHUNKOWE ANDRZEJKA"
                />
                <div className="oferta-img-caption"><p>OFERTA</p></div>
                </div>

                
                
                <Row className="justify-content-md-center">
                    <h2>Świadczymy usługi z zakresu:</h2> 
                    <div className="oferta">
                    <Row>
                        <Col className="tab1">
                            <ul>
                                <li>Pełnej księgowości</li>
                                <li>Prowadzenia księg przychodów i rozchodów</li>
                                <li>Obsługa kadrowo-płacowej</li>
                                <li>Rozliczania PIT,CIF,VAT,ZUS,PFRON</li>
                                <li>Pomocy w założeniu działaności gospodarczej oraz spółek z o. o.</li>
                            </ul>
                        </Col>
                        <Col className="tab2">
                            <ul>
                                <li>Reprezentowania przed urzędami</li>
                                <li>Sprawozdań finansowych i statystycznych</li>
                                <li>Analiz i prognoz finansowych</li>
                                <li>Ryczałtowych ewidencji przychodów</li>
                                <li>Rozliczania rolników</li>
                            </ul>
                        </Col>
                    </Row>
                        
                    </div>
                    <h1>ZAPRASZAMY DO WSPÓŁPRACY</h1>
                
                </Row>
            </Container>
        );
    }
}
export default Offer;