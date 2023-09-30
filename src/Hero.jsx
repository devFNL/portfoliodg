import React from "react";
import { Link } from "react-router-dom";
import perfil from "../public/circle.png";

const Hero = () => {
  return (
    <div class="bg-dark text-secondary px-4 py-4 text-center">
      <div class="py-4">
        <img src={perfil} alt="" height={"250px"} class="perfil" />
        <h1 class="mt-4 display-6 fw-bold text-white">Federico Lindberg</h1>
        <div class="col-lg-6 mx-auto">
          <p class="fs-6 mb-4">
            I'm a Graphic Designer from Argentina with over 7 years of
            experience, including a dedicated 2-year tenure as a Brand and Image
            Manager. My passion for design is unwavering, and I'm driven by the
            pursuit of excellence in every project. I approach design with a
            deep appreciation for theory, context, and established standards,
            ensuring that each visual creation is meticulously crafted to its
            fullest potential. Throughout my career, I have specialized in brand
            design, leveraging my skills to shape and enhance visual identities.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              to={"/mywork"}
              class="btn btn-outline-light btn-md px-4 fw-bold"
            >
              MyWork
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
