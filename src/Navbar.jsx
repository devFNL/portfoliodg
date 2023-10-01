import React from "react";
import { Link } from "react-router-dom";
import green from "../public/green.png";
import linkedIn from "../public/linkedin.png";

const Navbar = () => {
  return (
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img
              src={green}
              alt=""
              height={"34px"}
              style={{ margin: "5px" }}
              class="logo"
            />
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/mywork" class="nav-link px-2 text-white">
                Portfolio
              </Link>
            </li>
          </ul>
          <div class="text-end">
            <a
              href="https://www.linkedin.com/in/federico-lindberg/"
              target="blank_"
              class="linkedin-icon"
            >
              <img src={linkedIn} alt="linkedinlogo" height={"32px"} />
            </a>
          </div>
        </div>
      </div>
      <hr class="my-2" style={{ width: "90%", margin: "auto" }} />
    </header>
  );
};

export default Navbar;
