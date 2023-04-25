import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Example() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [selectedOption, setSelectedOption] = useState('student');

  const handleModal = (option) => {
    setModalOpen(!modalOpen);
    setEmail('');
    setPassword('');
    setSelectedOption(option);
  };  

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login or registration here
  };

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
        <Button onClick={handleModal}>Login</Button>
        <Modal show={modalOpen} onHide={handleModal}>
  <Modal.Header closeButton>
    <Modal.Title>Login</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="Email"
          placeholder="Email"
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email}
          autoFocus
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e)=>{setPassword(e.target.value)}}
          value={password}
          autoFocus
        />
      </Form.Group>
      <p>Forget Password?</p>
    </Form>
  </Modal.Body>
  <Modal.Footer style={{textAlign:"center",justifyContent:"center"}}>
    <Button variant="primary" onClick={handleModal} style={{textAlign:"center",justifyContent:"center"}} >
      Login
    </Button><br /><br />
    <div>
      <p>New User?<Link to="/signup">Register</Link></p>
      <Button variant="secondary" onClick={() => handleModal("student")}>
        Student Login
      </Button>
      <Button variant="secondary" onClick={() => handleModal("employee")}>
        Employee Login
      </Button>
    </div>
  </Modal.Footer>
</Modal>

    </>
  );
}


export default Example;