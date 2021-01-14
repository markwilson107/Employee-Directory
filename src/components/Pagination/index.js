import React from "react";

function Pagination(props) {
    return (
        <nav aria-label="..." style={{ marginTop: 20 }}>
            <div className="dropdown float-start">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.chunks}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="" onClick={props.handleChunksDropdown} data-value="10">10</a></li>
                    <li><a className="dropdown-item" href="" onClick={props.handleChunksDropdown} data-value="20">20</a></li>
                    <li><a className="dropdown-item" href="" onClick={props.handleChunksDropdown} data-value="30">30</a></li>
                    <li><a className="dropdown-item" href="" onClick={props.handleChunksDropdown} data-value="50">50</a></li>
                    <li><a className="dropdown-item" href="" onClick={props.handleChunksDropdown} data-value="100">100</a></li>
                </ul>
            </div>
            <ul className="pagination pagination-sm justify-content-center">
                {
                    [...Array(props.maxPages)].map((e, i) => {
                        if (i == props.page) {
                            return (
                                <li className="page-item" aria-current="page">
                                    <span className="page-link" style={{ backgroundColor: "#c2e9f0", color: "black" }}>{i + 1}</span>
                                </li>
                            )
                        }
                        return <li className="page-item"><a style={{ color: "black" }} className="page-link" href="" onClick={props.changePage} data-value={i}>{i + 1}</a></li>
                    })
                }
            </ul>
        </nav>
    );
}

export default Pagination;



