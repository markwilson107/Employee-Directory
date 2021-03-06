import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="https://github.com/markwilson107/Employee-Directory"
              target="_blank"
              className="nav-link active float-end"
            >
              Help
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
