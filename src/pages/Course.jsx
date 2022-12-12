import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import java from '../img/java.jpg';
import cp from '../img/c.jpg';
import python from '../img/python.jpg';
import react from '../img/react.jpg';
import unix from '../img/unix.jpg';
import '../css/all.css'

import { useNavigate } from 'react-router-dom';

export default function Course() {
  const navigate = useNavigate();
    const tag = () => {
      navigate('/Enroll');
    }
  return (
    <div>
    <div className="bod">
    <div className="lo">
      <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={java}  /> 
              <Card.Body>
                <Card.Title> <b>Java </b></Card.Title>
                <Card.Text>
                  <b> Duration </b> : 500/month
                  < br/>
                 <b> Month </b>: 3month/12 week
                  < br/>
                 <b> Syllabus </b>: java and its Basic
                </Card.Text>
                <Button variant="success" onClick={tag}>Enroll now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={cp}  /> 
              <Card.Body>
                <Card.Title> <b>C Programing </b></Card.Title>
                <Card.Text>
                   <b> Duration </b> : 500/month
                  < br/>
                 <b> Month </b>: 3month/12 week
                  < br/>
                 <b> Syllabus </b>: C programing and its Basic
                </Card.Text>
                <Button variant="success" onClick={tag}>Enroll now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={python}  /> 
              <Card.Body>
                <Card.Title><b> Python</b> </Card.Title>
                <Card.Text>
                   <b> Duration </b> : 500/month
                  < br/>
                 <b> Month </b>: 3month/12 week
                  < br/>
                 <b> Syllabus </b>: Python and its Basic
                </Card.Text>
                <Button variant="success" onClick={tag}>Enroll now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={react}  /> 
              <Card.Body>
                <Card.Title><b> React</b> </Card.Title>
                <Card.Text>
                   <b> Duration </b> : 500/month
                  < br/>
                 <b> Month </b>: 3month/12 week
                  < br/>
                 <b> Syllabus </b>: React and its Basic
                </Card.Text>
                <Button variant="success" onClick={tag}>Enroll now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={unix}  /> 
              <Card.Body>
                <Card.Title><b> Unix</b> </Card.Title>
                <Card.Text>
                   <b> Duration </b> : 500/month
                  < br/>
                 <b> Month </b>: 3month/12 week
                  < br/>
                 <b> Syllabus </b>: Unix and its Basic
                </Card.Text>
                <Button variant="success" onClick={tag}>Enroll now</Button>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
    </div>
    </div>
  )
}
