import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/all.css'

function Register() {
  return (
    <div className="whi">
    <Form>
      <Form.Group className="mb-3" controlId="BasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted" required>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" placeholder="Entre the name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="mobileno">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="tel" placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="basicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ConfrimPassword">
        <Form.Label>confirm Password</Form.Label>
        <Form.Control type="confirm password" placeholder="confirm Password" />
      </Form.Group>
     
      <Button variant="info" type="submit">
        Register
      </Button>
    </Form>
    </div>
  );
}

export default Register;