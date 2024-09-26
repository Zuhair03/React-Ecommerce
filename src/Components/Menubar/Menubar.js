import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Menubar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="d-lg-none" />
          <Navbar.Collapse id="navbarScroll" className="d-none d-lg-flex">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Shop">Shop</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="/Megashop">Mega Shop</Nav.Link>
              
              {/* Mega Menu Dropdown */}
              <NavDropdown title="Mega Menu" id="mega-menu" className="position-static">
                <Container fluid className="p-3">
                  <div className="row">
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div className="list-group list-group-flush">
                        <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                          Lorem ipsum
                        </p>
                        <NavDropdown.Item href="#">Dolor sit</NavDropdown.Item>
                        <NavDropdown.Item href="#">Amet consectetur</NavDropdown.Item>
                        <NavDropdown.Item href="#">Cras justo odio</NavDropdown.Item>
                        <NavDropdown.Item href="#">Adipisicing elit</NavDropdown.Item>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div className="list-group list-group-flush">
                        <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                          Explicabo voluptas
                        </p>
                        <NavDropdown.Item href="#">Perspiciatis quo</NavDropdown.Item>
                        <NavDropdown.Item href="#">Cras justo odio</NavDropdown.Item>
                        <NavDropdown.Item href="#">Laudantium maiores</NavDropdown.Item>
                        <NavDropdown.Item href="#">Provident dolor</NavDropdown.Item>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-md-0">
                      <div className="list-group list-group-flush">
                        <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                          Iste quaerato
                        </p>
                        <NavDropdown.Item href="#">Cras justo odio</NavDropdown.Item>
                        <NavDropdown.Item href="#">Est iure</NavDropdown.Item>
                        <NavDropdown.Item href="#">Praesentium</NavDropdown.Item>
                        <NavDropdown.Item href="#">Laboriosam</NavDropdown.Item>
                      </div>
                    </div>
                  </div>
                </Container>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="d-lg-none"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Ecommerce Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Shop">Shop</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
                <NavDropdown title="Mega Menu" id="offcanvas-nav-dropdown">
                  <Container fluid className="p-3">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="mb-1 font-weight-bold">Category 1</p>
                        <NavDropdown.Item href="#">Item 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">Item 2</NavDropdown.Item>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-1 font-weight-bold">Category 2</p>
                        <NavDropdown.Item href="#">Item 3</NavDropdown.Item>
                        <NavDropdown.Item href="#">Item 4</NavDropdown.Item>
                      </div>
                    </div>
                  </Container>
                </NavDropdown>
              </Nav>
              <Form className="d-flex mt-3" role="search">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Menubar;
