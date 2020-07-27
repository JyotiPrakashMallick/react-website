import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import RoadtoMountain from "../assets/RoadtoMountain.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    // background: url(${RoadtoMountain}) no-repeat center bottom;
    background-color:#ffc107;
    background-size: cover;

  }
  
`;
export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Hello World!</h1>
        <p>React-Bootstrap: React+BootStrap = Cool Web developement</p>
      </Container>
    </Jumbo>
  </Styles>
);
