'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/">
            <img data-testid="website-logo" src="/img/logo/aathirai_logo.png" alt="Aathirai" className='site-logo' />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className='active bg-light'>Home</Nav.Link>
              <Nav.Link href="/">About Us</Nav.Link>
              <Nav.Link href="/">Our Beneficiaries</Nav.Link>
              <NavDropdown title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item href="/" className='active bg-light'>Our Events</NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Rising Star Projects
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">To Donate</Nav.Link>
              <Nav.Link href="/">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}