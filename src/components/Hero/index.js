import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Hero(props) {
  return (
      <div className="hero">
        <Container>
          <Col size="col-md-12">
            <img src="./logo512Hero.png"></img>
          </Col>
          <Row addClass="align-items-end">
            <Col size="col-md-12">
              <h2>Employee Directory</h2>
              <h3>Search and filter your employees non-sensitive data.</h3>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Hero;
