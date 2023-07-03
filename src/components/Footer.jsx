import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Footer() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark ">
        <Container className="d-flex justify-content-center ">
          <Navbar.Brand href="#home" className="text-light">
            Footer by: Nursultan
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
