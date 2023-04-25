// import React, { useEffect, useState } from "react"
// import "./Nav.css"
// import { Link } from "react-router-dom"
// import { FaBars } from "react-icons/fa"
// import { ImCross } from "react-icons/im"

// const Nav = () => {
//   const [Mobile, setMobile] = useState(false)
//   const [show,handleShow] = useState(false)

//   const transitionNavBar = ()=>{
//     if (window.scrollY > 100) {
//       handleShow(true);
//     } else {
//       handleShow(false);
//     }
//   }
//   useEffect(()=>{
//     window.addEventListener("scroll",transitionNavBar);
//     return() =>window.removeEventListener('scroll',transitionNavBar);
//   },[]);

//   return (
//     <>
//     <div className="navbar_container">
//       <nav className= {`navbar ${show && `nav_black`}`}>
//         <h3 className='logo'>Logo</h3>
//         {/*
//         if large screen ma xa bhane Mobile add huxa
//         if mobile screen ma xa bhane nav-links-mobile add huxa
//         */}
//         <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
//           <Link to='/' className='home'>
//             <li>Home</li>
//           </Link>
//           <Link to='/about' className='about'>
//             <li>About</li>
//           </Link>
//           <Link to='/services' className='services'>
//             <li>Services</li>
//           </Link>
//           <Link to='/login' className='skills'>
//             <li>Login</li>
//           </Link>
//           <Link to='/contact' className='home'>
//             <li>contact</li>
//           </Link>
//         </ul>
//         {/* 
//         whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
//         */}
//         <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
//           {Mobile ? <ImCross /> : <FaBars />}
//         </button>
//       </nav>
//     </div>
//     </>
//   )
// }
// export default Nav;


import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  const [ modalOpen,setModalOpen ] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  console.log(email)

  const handleModal = ()=>{
    setModalOpen(!modalOpen)
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "rgba(186, 185, 185, 0.977)",color:"black",fontSize:"bold"}}  fixed='top'>
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Brand href="#">
            <img
              alt=""
              src="/images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Login" id="collasible-nav-dropdown">
              <NavDropdown.Item  onClick={handleModal} >Student Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Employee Login
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Register" id="collasible-nav-dropdown" className='me-6'>
              <NavDropdown.Item href="#action/3.1">Student Register</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Employee Register
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    {/* Modal */}

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
          {/* <Button variant="secondary" onClick={handleModal}>
            Close
          </Button> */}
            <Button variant="primary" onClick={handleModal} style={{textAlign:"center",justifyContent:"center"}} >
              Login
            </Button><br /><br />
          <div>
            <p>New User?<Link to="/signup">Register</Link></p>
          </div>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default CollapsibleExample;