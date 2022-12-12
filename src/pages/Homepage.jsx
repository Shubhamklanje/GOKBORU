import React from 'react'
import '../css/Homepage.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import men1 from '../img/mentor1.jpeg';
import men2 from '../img/mentor2.jpeg';
import men3 from '../img/mentor3.jpg';
import Footer from '../pages/Footer';
import Card from 'react-bootstrap/Card';

export default function Homepage() {
  return (
    <div>
      <div className="bo">
        <Row>
          <Col sm={8}>
            <div className="fon">
              FUTURE-PROOF<div style={{ color: "White" }}>
                YOUR<br />
                CAREER
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="sub">
              Future-proof your career, Learn <br />new skills online with world‑class<br /> universities and experts.
              <br />
              <Button className="modibtn">Start learning now</Button>
            </div>

          </Col>
        </Row>
      </div>
      <br />
      <div className="mentor">
        <br />
        <div className="mh">OUR MENTORS</div>
        <br /><br />
        <div class="wrapper">
          <div class="gallery">
            <ul>
              <li><img src={men1} alt="fi" /></li>
              <li><img src={men2} alt="sec" /></li>
              <li><img src={men3} alt="thi" /></li>
            </ul>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /><br /><br /> <br />
      </div>
      <div className="wo">
        <div className="hed">How does it work?</div>
        <div className="work">
          <br /><br />
          <Row>
            <Col><h1 style={{ color: 'white' }}>1</h1>
              <br />
              <h3>Choose a short course</h3>
              <br /><br />
              From introductory to advanced, you’ll find high-quality courses across every subject, designed and taught by academic and industry experts.
            </Col>
            <Col><h1 style={{ color: 'white' }}>2</h1>
              <br />
              <h3>Subscribe or upgrade</h3>
              <br />
              <br />
              Join FutureLearn Unlimited for long-term access to your course and a CV-ready certificate, or upgrade individually on each course.
            </Col>
            <Col><h1 style={{ color: 'white' }}>3</h1>
              <br />
              <h3>Learn, connect and discuss</h3>
              <br />
              Courses are divided into weeks and steps. You’ll be able to connect with other learners throughout your learning journey.
            </Col>
            <Col><h1 style={{ color: 'white' }}>4</h1>
              <br />
              <h3>Find your next course</h3>
              <br />
              <br />
              Now you’ve caught the bug, what will you learn next?
            </Col>
          </Row>
        </div>
      </div>
      <div className="yo">
        <div className="wlo">Why GOKBORU?</div>
        <Row>
          <Col md={{ span: 7, offset: 8 }}>
          <Card border="dark" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Learn together</Card.Title>
          <Card.Text>
          We're all about social learning. Chat with others on your course, learn from each other, and develop your skills in a global classroom of millions.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
        </Row>
        <br/>
        <Row>
        <Col md={{ span: 1, offset: 5 }}><Card border="dark" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Learn anything</Card.Title>
          <Card.Text>
          From healthcare and history to coding and languages, FutureLearn has a course for you, from beginner to expert.
          </Card.Text>
        </Card.Body>
      </Card></Col>
        <Col md={{ span: 1, offset: 2 }}><Card border="dark" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Learn flexibly</Card.Title>
          <Card.Text>
          100% online courses mean you can learn wherever, whenever suits you.<br/><br/><br/>
          </Card.Text>
        </Card.Body>
      </Card></Col>
      </Row>
      <br/>
      <Row>
      <Col md={{ span: 1, offset: 2 }}><Card border="dark" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Learn with results</Card.Title>
          <Card.Text>
          Boost your CV with an Unlimited subscription to our bite-sized short courses, or take your learning further with our ExpertTracks and fully accredited microcredentials.
          </Card.Text>
        </Card.Body>
      </Card></Col>
        <Col md={{ span: 1, offset: 2 }}><Card border="dark" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Learn from the best</Card.Title>
          <Card.Text>
          Designed and facilitated by international teaching experts, the quality of our courses is what sets us apart.<br/><br/>
          </Card.Text>
        </Card.Body>
      </Card></Col>
        <Col md={{ span: 1, offset: 2 }}><Card border="dark" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Learn with top institutions</Card.Title>
          <Card.Text>
          Our courses come from lpu universities guildlines.<br/><br/><br/><br/>
          </Card.Text>
        </Card.Body>
      </Card></Col>
      </Row>
      </div>
      <br/>
      <Footer />
    </div>
  )
}
