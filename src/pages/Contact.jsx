import React from 'react'
import insta from '../img/insta.jpg'
import whatsapp from '../img/whatsapp.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {
  return (
    <div className="sab">
      <br/><br/>
      <h1 style={{color:'white'}}>Contact us here!</h1>
        <div className="conlogo">
        <Row>
        <Col><a href="https://www.instagram.com" target="_blank" rel="insta"><img className="insta" src={insta} alt='insta' /></a></Col>
        <Col><a href="https://www.whatsapp.com" target="_blank" rel="whatsapp"> <img className="whatsapp" src={whatsapp} alt='whatsapp' /></a></Col>
      </Row>
        <div className="dataofc">we are avaliable from 7 am to 6 pm 356 days.</div>
        </div>
    </div>
  )
}
