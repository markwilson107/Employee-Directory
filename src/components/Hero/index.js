import React from "react";
import ContainerFluid from "../ContainerFluid";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Hero(props) {
  return (
    <ContainerFluid>
      <div className="hero text-center">
        <Container>
        <Row>
          <Col size="col-12 col-md-4 align-self-center">
            <img src="./logo512Hero.png"></img>
          </Col>
          <Col size="col-12 col-md-8 align-self-center">
            <h2>Employee Directory</h2>
            <h3>Search and filter your employees non-sensitive data.</h3>
          </Col>
        </Row>          
        </Container>

      </div>
    </ContainerFluid>
  );
}

export default Hero;
