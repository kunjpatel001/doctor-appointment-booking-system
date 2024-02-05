import React from "react";


function Navbar() {
  return (
    
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#" style={{ fontSize: "3rem" }}>
          HMS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a
                className="nav-link"
                href="/home"
                style={{
                  color: "black",
                  fontSize: "1.3rem",
                  marginLeft: "20px",
                }}
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/services"
                style={{
                  color: "black",
                  fontSize: "1.3rem",
                  marginLeft: "20px",
                }}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="/aboutus"
                style={{
                  color: "black",
                  fontSize: "1.3rem",
                  marginLeft: "20px",
                }}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="/gallary"
                style={{
                  color: "black",
                  fontSize: "1.3rem",
                  marginLeft: "20px",
                }}
              >
                Gallary
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="/contact"
                style={{
                  color: "black",
                  fontSize: "1.3rem",
                  marginLeft: "20px",
                }}
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="#"
                style={{
                  color: "black",
                  fontSize: "1.3rem",
                  marginLeft: "20px",
                }}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>


  )
}
export default Navbar