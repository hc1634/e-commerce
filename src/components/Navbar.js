import React from "react";

const Navbar = ({ cartItems }) => {
  // console.log(cartItems);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white fixed-top pl-5">
        <a className="navbar-brand text-white" href="/">
          Emart
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-white p-1" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link text-white p-1 pl-md-3" href="/cart">
                Cart <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
