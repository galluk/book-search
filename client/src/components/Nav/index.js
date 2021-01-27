import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <Link
        to="/"
        className={
          window.location.pathname === "/" || window.location.pathname === "/search" ? "nav-link active" : "nav-link"
        }
      >
        Search
      </Link>
      <Link
        to="/saved"
        className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
      >
        Saved
      </Link>
    </nav>
  );
}

export default Nav;
