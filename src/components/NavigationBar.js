import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { RiHome2Line } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import styled from "styled-components";

const Styles = styled.div`
  .navbar-nav .nav-link {
    color: white;
  }
`;

const NavigationBar = () => (
  <Styles>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">
        <GiBrain /> (InquisitiveMinds){" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="/">
          <RiHome2Line size="1.5em" /> Home
        </Nav.Link>
      </Nav>
    </Navbar>
  </Styles>
);

export default NavigationBar;
