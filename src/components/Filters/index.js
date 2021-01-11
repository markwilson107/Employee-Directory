import React from "react";
import "./style.css";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

function Filters(props) {
    return (
        <Container style={{ marginTop: 10, marginBottom: 10, padding: 0 }}>
            <Row>
                <Col size="col-12 col-md-6">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" role="button" id="sortDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>Sort By: </strong>{props.sort.charAt(0).toUpperCase() + props.sort.slice(1)}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="sortDropdownMenuLink">
                            {
                                props.catagories.map((result, index) => {
                                    return (
                                        <li><a key={`Sort_dropdown-${index}`} className="dropdown-item" href="" onClick={props.handleSortDropdown} data-value={result}>{result.charAt(0).toUpperCase() + result.slice(1)}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </Col>
                <Col size="col-12 col-md-6">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" onChange={props.handleFilterChange} placeholder="Search" aria-label="Text input with dropdown button" />
                        <button className="btn btn-secondary dropdown-toggle search-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">{props.filter.charAt(0).toUpperCase() + props.filter.slice(1)}</button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a key={`Search_dropdown-0`} onClick={props.handleFilterDropdown} className="dropdown-item" href="" data-value="all">All</a></li>
                            {
                                props.catagories.map((result, index) => (
                                    <li><a key={`Search_dropdown-${index + 1}`} onClick={props.handleFilterDropdown} className="dropdown-item" href="" data-value={result}>{result.charAt(0).toUpperCase() + result.slice(1)}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Filters;
