import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';


class About extends Component{
    render(){
        return(
            <Container className="mt-5">
                <Row>
                    <p>Nasze biuro rachunkowe powstało w 2018 roku.</p>
                </Row>
            </Container>   
        );
    }
}
export default About;