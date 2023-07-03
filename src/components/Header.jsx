import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark ">
      <Container className="d-flex justify-content-center ">
        <Navbar.Brand href="#home" className="text-light">
          Navbar by: Nursultan
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
