import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';


class ofr1 extends Component{
    render(){
        return(
            <Container className="mt-5">
                <Row>
                    <div className="lista_ksiegaP">
                        <ul>
                            <li> Kwalifikowanie dowodów do księgowania</li>
                            <li> Dokonywanie zapisów w księdze</li>
                            <li> Prowadzenie ewidencji środków trwałych oraz wartości niematerialnych i prawnych; ustalanie i doradztwo w zakresie doboru właściwych metod, okresów i stawek amortyzacyjnych</li>
                            <li> Ustalanie wyniku finansowego</li>
                            <li> Sporządzanie rocznych zeznań podatkowych właścicieli firm, wspólników spółek cywilnych i osobowych</li>
                            <li> Gromadzenie i przechowywanie dowodów księgowych oraz pozostałej dokumentacji przewidzianej ustawą o podatku dochodowym od osób fizycznych oraz rozporządzeniem w sprawie prowadzenia podatkowej księgi przychodów i rozchodów</li>
                        </ul>
                    </div>    
                </Row>
            </Container>   
        );
    }
}
export default ofr1;