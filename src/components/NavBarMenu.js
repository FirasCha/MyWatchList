import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBarMenu = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" style={{ backgroundColor: '#caced1' }}>
          <Container fluid>
            <Navbar.Brand href="/">Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" >Menu</Nav.Link>
                  <Nav.Link href="/tvshow" >TV Shows</Nav.Link>
                  <Nav.Link href="/mymovies">Movies</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavBarMenu