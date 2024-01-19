import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header(props) {
  return (
    <div className="HeaderSection">
      <div className="Heading">
        <h3>Kaveri Chougule Directory App</h3>
      </div>
      <div className="buttons">
        <Link to="/">
          <button>Add New Person</button>
        </Link>
        <Link to="/retrieve">
          <button>Retrieve Information</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
