'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { usePathname } from 'next/navigation';

export function NavigationBar() {
  const pathname = usePathname();

  return (
    <div>
      <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/">
            <img data-testid="website-logo" src="/img/logo/aathirai_logo.png" alt="Aathirai" className='site-logo' />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={pathname} className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us/">About Us</Nav.Link>
              <Nav.Link href="/our-beneficiaries/">Our Beneficiaries</Nav.Link>
              <Nav.Link href="/our-events/">Our Events</Nav.Link>
              <Nav.Link href="/rising-star-projects/">Rising Star Projects</Nav.Link>
              <Nav.Link href="/to-donate/">To Donate</Nav.Link>
              <Nav.Link href="/contact-us/">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}