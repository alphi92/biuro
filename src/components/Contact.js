import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Card} from 'react-bootstrap';


class Contact extends Component{
    sendEmail = (e) => {
        e.preventDefault();
    
    emailjs.sendForm('service_ywfcu7d', 'template_hturepp', e.target, 'user_IeTzbnLxYXhXc9PN7C3uC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    render(){
         return(
          <Container> 
          
           
            <Row>
                <Col sm={4}>
                    <Card style={{ width: '19rem' }}>
                        <Card.Body>
                            <Card.Title>Kontakt</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Zapraszamy do kontaktu</Card.Subtitle>
                            <Card.Text>
                                Biuro rachunkowe <br/>
                                Andrzej Bardadin<br/>
                                Kozubszczyzna 79 <br/>
                                21-030 Motycz<br/>

                                Tel: 691 035 394<br/>
                                andrzejbardadin@gmail.com<br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={8}><form onSubmit={this.sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <h2>Wyślij zapytanie</h2>   
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Imię" name="from_name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email" name="from_email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Numer kontaktowy" name="from_number"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Twoja wiadomość" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Wyślij!"></input>
                        </div>
                    </div>
                </form></Col>
            </Row>
            
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9995.442222802054!2d22.4289949!3d51.2216444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa280e0a7bc7973da!2sBiuro%20Rachunkowe%20Andrzej%20Bardadin!5e0!3m2!1sen!2spl!4v1603701295008!5m2!1sen!2spl" title="mapa_dojazdu"></iframe>
            
             </Container>

        
        );
    }
}
export default Contact;