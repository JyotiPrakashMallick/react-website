import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: gray;
    // font-family: Monaco;
    // color: red;
  }

  .navbar-nav .nav-link {
    color: white;
  }
`;

const openLocation = () => {
  return window.open("https:linkedin.com");
};

export const Footer = () => (
  <Styles>
    <Navbar variant="dark" fixed="bottom">
      <Nav className="mr-auto">
        <Nav.Link href="About">
          <IoIosContacts size="1.5em" /> About
        </Nav.Link>
        <Nav.Link href="Contact">
          {" "}
          <AiOutlineMail size="1.5em" /> Contact us
        </Nav.Link>
        <Nav.Link onClick={openLocation}>
          <RiLinkedinBoxLine size="1.5em" /> LinkedIn
        </Nav.Link>
      </Nav>
    </Navbar>
  </Styles>
);
