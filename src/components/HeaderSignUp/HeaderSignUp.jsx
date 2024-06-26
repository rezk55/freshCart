import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";

export default function HeaderSignUp() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary pt-3">
        <div className="container-fluid mx-3">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex">
                <span className="pt-2 fw-fs ">Already have an account?</span>
                <NavLink
                  className="nav-link position-relative "
                  aria-current="page"
                  to="/SignIn"
                >
                  <span className=" d-block fw-fs fw-bolder">Sign in</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
