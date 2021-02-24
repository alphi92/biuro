import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


class ofr2 extends Component{
    render(){
        return(
            <Container fluid>
                <div className="ofr22">
                    OFERTA
                </div>  
                <Row>
                    <Col>
                        <div className="lista_ksiegaP">
                        <ul>
                                <li> Tworzenie i aktualizacja w zakresie polityki rachunkowości przyjętej przez firmę, w tym indywidualnych planów kont dostosowanych do specyfiki firmy.</li>
                                <li> Dokumentowanie i dekretowanie zdarzeń gospodarczych.</li>
                                <li> Prowadzenie , na podstawie dowodów księgowych, ksiąg rachunkowych.</li>
                                <li> Prowadzenie rozrachunków z kontrahentami.</li>
                                <li> Prowadzenie ewidencji środków trwałych oraz wartości niematerialnych i prawnych; optymalizacja w zakresie doboru właściwych metod, okresów i stawek amortyzacyjnych.</li>
                                <li> Tworzenie instrukcji inwentaryzacyjnych i innych dokumentów, okresowe ustalanie.</li>                           
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="lista_ksiegaP">
                            <ul>
                                <li> Wycena aktywów i pasywów oraz ustalanie wyniku finansowego.</li>
                                <li> Sporządzanie sprawozdań finansowych.</li>
                                <li> Ustalanie zobowiązań podatkowych w zakresie podatku dochodowego z działalności gospodarczej (PIT, CIT), sporządzanie rocznych zeznań podatkowych właścicieli firm, wspólników spółek cywilnych i osobowych, spółek z o. o., spółek akcyjnych.</li>
                                <li> Poddawanie sprawozdań finansowych badaniu przez biegłych rewidentów.</li>
                                <li> Ogłaszanie sprawozdań finansowych (KRS, Monitor Polski B).</li>
                                <li> Gromadzenie i przechowywanie dowodów księgowych oraz pozostałej dokumentacji przewidzianej ustawą o rachunkowości.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>   
        );
    }
}
export default ofr2;