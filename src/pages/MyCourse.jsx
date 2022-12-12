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
import '../css/myc.css';

import { useNavigate } from 'react-router-dom';

export default function MyCourse() {
  const navigate = useNavigate();
  const home = () => {
    navigate('/Schedule');
  }
  return (
    <div>
    <div className="bod">
    <div className="lo">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card >
            <Card.Img variant="top" src={unix} />
            <Card.Body>
              <Card.Title>Unix</Card.Title>
              <Card.Text>
                <b> Teacher Name </b> : Prajwal dhote sir
              </Card.Text>
              <Button variant="success" onClick={home}> Schedule </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"> by School Computer Science </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card >
            <Card.Img variant="top" src={react} />
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>
                <b> Teacher Name </b> : Shubham lanje sir
              </Card.Text>
              <Button variant="success" onClick={home}> Schedule </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"> by School Computer Science </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card >
            <Card.Img variant="top" src={cp} />
            <Card.Body>
              <Card.Title>C programing</Card.Title>
              <Card.Text>
                <b> Teacher Name </b> : Harsh Tiwari sir
              </Card.Text>
              <Button variant="success" onClick={home}> Schedule </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"> by School Computer Science </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card >
            <Card.Img variant="top" src={python} />
            <Card.Body>
              <Card.Title>Python</Card.Title>
              <Card.Text>
                <b> Teacher Name </b> : Himanshu Roy Sir
              </Card.Text>
              <Button variant="success" onClick={home}> Schedule </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"> by School Computer Science </small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card >
            <Card.Img variant="top" src={java} />
            <Card.Body>
              <Card.Title>Java</Card.Title>
              <Card.Text>
                <b> Teacher Name </b> : Ishaan Billore sir
              </Card.Text>
              <Button variant="success" onClick={home} > Schedule </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"> by School Computer Science </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
    </div>
    </div>
  )
}
