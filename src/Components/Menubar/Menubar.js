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
    {/* fixed-top */}
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="d-lg-none" />
          <Navbar.Collapse id="navbarScroll" className="d-none d-lg-flex">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Shop">Shop</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>

              {/* Navbar Dropdown for Mega Menu */}
              <NavDropdown title="Mega Menu" id="nav-dropdown">
                <div
                  className="dropdown-menu w-100 mt-0 p-3"
                  aria-labelledby="navbarDropdown"
                  style={{
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  }}
                >
                  <div className="row">
                    <div className="col-md-4">
                      <p className="mb-1 font-weight-bold">Category 1</p>
                      <NavDropdown.Item href="#">Item 1</NavDropdown.Item>
                      <NavDropdown.Item href="#">Item 2</NavDropdown.Item>
                      <NavDropdown.Item href="#">Item 3</NavDropdown.Item>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-1 font-weight-bold">Category 2</p>
                      <NavDropdown.Item href="#">Item 4</NavDropdown.Item>
                      <NavDropdown.Item href="#">Item 5</NavDropdown.Item>
                      <NavDropdown.Item href="#">Item 6</NavDropdown.Item>
                    </div>
                  </div>
                </div>
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

          {/* Offcanvas menu for mobile */}
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
                  <div
                    className="dropdown-menu w-100 mt-0 p-3"
                    aria-labelledby="navbarDropdown"
                    style={{
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    }}
                  >
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
                  </div>
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
