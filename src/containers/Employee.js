import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import EmployeeList from "../components/EmployeeList";

class Employee extends Component {
  state = {
    employees: []
  };

  // When the component mounts, load the employee data
  componentDidMount() {
    this.importEmployees();
  };

  // Import new set of employee data
  importEmployees = () => {
    API.getEmployees(10)
    .then(res => {
      console.log(res);
      let result = res.data.results.map(row => ({
        name: {first: row.name.first, last: row.name.last},
        gender: row.gender,
        location: `${row.location.city}, ${row.location.country}`,
        dob: {date: row.dob.date, age: row.dob.age},
        beenWithUs: row.registered.age,
        phone: row.phone,
        email: row.email,
        picture: row.picture.thumbnail
      }));
      const newState = { ...this.state };
      newState.employees = result
      this.setState(newState);
      console.log(result);
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
          <h1>Employee Directory</h1>
          <h2>Search and filter your employees non-sensitive data.</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Welcome To Employee Directory</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <EmployeeList result={this.state.employees}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

export default Employee;
