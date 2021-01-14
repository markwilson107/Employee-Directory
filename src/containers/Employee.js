import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import EmployeeList from "../components/EmployeeList";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

class Employee extends Component {
  state = {
    employees: [],
    employeesList: [[]],
    maxPages: 0,
    page: 0,
    chunkSize: 10,
    sort: "id",
    filter: "all",
    catagories: ["id", "name (First)", "name (Last)", "location", "age", "gender"]
  };

  // When the component mounts, load the employee data
  componentDidMount() {
    this.importEmployees(30);
  };

  paginationChunks(result) {
      let employeeChunks = [];
      let chunkSize = this.state.chunkSize
      for (let i = 0; i < result.length; i += chunkSize) {
        employeeChunks.push(result.slice(i, i + chunkSize));
      }
      if (employeeChunks.length < 1)
        return [[]];
      return employeeChunks;
  };

  importError() {
    return
  }

  // Import new set of employee data
  importEmployees = (amount) => {
    API.getEmployees(amount)
      .then(res => {
        const result = res.data.results.map((row, index) => ({
          id: index+1,
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
        newState.maxPages = Math.ceil(result.length / this.state.chunkSize);
        this.setState(newState);
      })
      .catch(err => {
        console.log(err);
        this.importError()
      });
  };

  sortEmployees = (result, sortBy) => {
    // Checks employee state is not empty
    if (result.length > 0) {
      //function index(obj,i) {return obj[i]};
      let currentEmployees = result;
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
    this.sortEmployees(this.state.employeesList, dataValue);
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
      newState.maxPages = Math.ceil(newEmployees.length / newState.chunkSize);
      newState.page = 0;
      this.sortEmployees(newEmployees, newState.sort);
      this.setState(newState);      
    }
  };

  changePage = event => {
    event.preventDefault();
    let newState = { ...this.state };
    newState.page = parseInt(event.target.attributes.getNamedItem("data-value").value);
    this.setState(newState);
  };

  handleChunksDropdown = event => {
    event.preventDefault();
    let size = parseInt(event.target.attributes.getNamedItem("data-value").value);
    let newState = { ...this.state };
    newState.chunkSize = size;
    newState.maxPages = Math.ceil(newState.employeesList.length / size);
    newState.page = 0;    
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Hero />
        <div style={{ backgroundColor: "white" }}>
          <Container style={{ minHeight: 600 }}>
            <Row>
              <Col size="col-md-12">
                <h1 style={{ marginTop: 20 }}>Employee Database</h1>
              </Col>
            </Row>
            <Row>
              <Col size="col-12">
                <Filters catagories={this.state.catagories} handleFilterChange={this.handleFilterChange} handleSortDropdown={this.handleSortDropdown} handleFilterDropdown={this.handleFilterDropdown} sort={this.state.sort} filter={this.state.filter} />
                <EmployeeList result={this.paginationChunks(this.state.employeesList)} page={this.state.page} />
              </Col>
            </Row>
            <Row>
              <Pagination changePage={this.changePage} handleChunksDropdown={this.handleChunksDropdown} chunks={this.state.chunkSize} maxPages={this.state.maxPages} page={this.state.page} />
            </Row>
          </Container>
        </div>
      </div>
    );
  }

}

export default Employee;
