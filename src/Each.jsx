import React from "react";
import { Link } from "react-router-dom";

const Each = ({ name, img, url }) => {
  return (
    <div class="col">
      <Link to={`/details/${url}`} style={{ textDecoration: "none" }}>
        <div class="card shadow-sm">
          <img
            class="bd-placeholder-img card-img-top card-img-bottom"
            width="100%"
            height="100%"
            src={img}
            role="img"
            preserveAspectRatio="xMidYMid slice"
          />
          {/* 
          <div class="card-body bg-dark">
            <p class="card-text text-light text-center">{name}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group m-auto">
                <Link
                  to={`/details/${url}`}
                  class="btn btn-sm btn-outline-light"
                >
                  View
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default Each;
