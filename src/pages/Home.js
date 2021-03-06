import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const openLocation = () => {
  return window.open(
    "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"
  );
};

const Home = () => {
  return (
    <Container fluid>
      <div>
        <h2>The 'Hello World' Program</h2>
        <p>
          A "Hello, World!" program generally is a computer program that outputs
          or displays the message "Hello, World!". Such a program is very simple
          in most programming languages, and is often used to illustrate the
          basic syntax of a programming language. It is often the first program
          written by people learning to code.[1][2] It can also be used as a
          sanity test to make sure that a computer language is correctly
          installed, and that the operator understands how to use it. Read more
          about it <Link onClick={openLocation}> here </Link>
        </p>
      </div>
    </Container>
  );
};

export default Home;
