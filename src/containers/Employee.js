import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import EmployeeList from "../components/EmployeeList";
import Filters from "../components/Filters";

class Employee extends Component {
  state = {
    employees: [],
    employeesList: [],
    sort: "id",
    filter: "all",
    catagories: ["id", "name (First)", "name (Last)", "location", "age", "gender"]
  };

  // When the component mounts, load the employee data
  componentDidMount() {
    this.importEmployees();
  };

  // Import new set of employee data
  importEmployees = () => {
    API.getEmployees(10)
      .then(res => {
        const result = res.data.results.map((row, index) => ({
          id: `${index}`,
          "name (First)": row.name.first,
          "name (Last)": row.name.last,
          fullname: `${row.name.first} ${row.name.last}`,
          gender: row.gender,
          location: `${row.location.country}`, //${row.location.city}, 
          dob: row.dob.date,
          age: row.dob.age,
          beenWithUs: row.registered.age,
          phone: row.phone,
          email: row.email,
          picture: row.picture.thumbnail
        }));
        const newState = { ...this.state };
        newState.employees = result;
        newState.employeesList = result;
        this.setState(newState);
      })
      .catch(err => console.log(err));
  };

  sortEmployees = sortBy => {
    // Checks employee state is not empty
    if (this.state.employeesList.length > 1) {
      //function index(obj,i) {return obj[i]};
      let currentEmployees = this.state.employeesList;
      currentEmployees.sort((a, b) => {
        if (a[sortBy] < b[sortBy])
          return -1;
        if (a[sortBy] > b[sortBy])
          return 1;
        return 0;
      });
      let newState = { ...this.state };
      newState.employeesList = currentEmployees;
      this.setState(newState);
    }
  };

  handleSortDropdown = event => {
    event.preventDefault();

    const dataValue = event.target.attributes.getNamedItem("data-value").value;
    this.sortEmployees(dataValue);
    let newState = { ...this.state };
    newState.sort = dataValue;
    this.setState(newState);
  };

  handleFilterDropdown = event => {
    event.preventDefault();
    const dataValue = event.target.attributes.getNamedItem("data-value").value;
    let newState = { ...this.state };
    newState.filter = dataValue;
    this.setState(newState);
  };

  handleFilterChange = event => {
    this.filterEmployees(event.target.value);
  };

  filterEmployees = search => {
    // Checks employee state is not empty
    if (this.state.employees.length > 1) {
      let currentEmployees = this.state.employees;
      const filter = this.state.filter;
      let newEmployees = [];
      currentEmployees.find((row, index) => {
        let keywords = ``;
        if (filter === "all") {
          keywords = `${row.id} ${row.fullname.toLowerCase()} ${row.location.toLowerCase()} ${row.age} ${row.gender.toLowerCase()}`;
        } else if (filter === "id" || filter === "age") {
          keywords = `${row[filter]}`;
        } else {
          keywords = `${row[filter].toLowerCase()}`;
        };
        if (keywords.indexOf(search.toLowerCase()) != -1) {
          newEmployees.push(row);
        };
      });
      let newState = { ...this.state };
      newState.employeesList = newEmployees;
      this.setState(newState);
    }
  };

  render() {
    return (
      <div>
        <Hero />
        <div style={{ backgroundColor: "white" }}>
          <Container style={{ minHeight: 600 }}>
            <Row>
              <Col size="col-md-12">
                <h1 style={{marginTop: 20}}>Employee Database</h1>
              </Col>
            </Row>
            <Row>
              <Col size="col-12">
                <Filters catagories={this.state.catagories} handleFilterChange={this.handleFilterChange} handleSortDropdown={this.handleSortDropdown} handleFilterDropdown={this.handleFilterDropdown} sort={this.state.sort} filter={this.state.filter} />
                <EmployeeList result={this.state.employeesList} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }

}

export default Employee;
