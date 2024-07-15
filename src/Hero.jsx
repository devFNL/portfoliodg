import React from "react";
import { Link } from "react-router-dom";
import perfil from "../public/circle.png";
import photoshop from "../public/photoshop.svg";
import illustrator from "../public/illustrator.svg";
import indesign from "../public/indesign.svg";
import figma from "../public/figma.svg";
import canva from "../public/canva.svg";

const Hero = () => {
  return (
    <div className="bg-dark text-secondary px-4 py-4">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="py-4 text-center">
            <img src={perfil} alt="" height={"200px"} className="perfil" />
            <h1 className="mt-4 display-6 fw-bold text-white">
              Federico Lindberg
            </h1>
            <h2 className="fs-1 mb-4">Graphic Design</h2>
            <div className="text-center mb-4">
              <img
                src={illustrator}
                alt=""
                height={"45px"}
                className="stack me-2"
              />
              <img
                src={photoshop}
                alt=""
                height={"45px"}
                className="stack me-2"
              />
              <img
                src={indesign}
                alt=""
                height={"45px"}
                className="stack me-2"
              />
              <img src={figma} alt="" height={"45px"} className="stack me-2" />
              <img src={canva} alt="" height={"45px"} className="stack me-2" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="py-4 text-lg-start">
            <p className="fs-4 mb-4">
              Hi, I'm Federico, from Argentina. I've been a graphic designer for
              over 5 years, including 2 years as a Brand and Image Manager. My
              passion for design drives me to constantly pursue excellence in
              every project, with a deep focus on design theory and innovation.
              I specialize in brand design and have recently been focused on
              creating interfaces and user experiences for applications and
              websites, aiming to deliver intuitive and engaging digital
              experiences that meet user needs.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-start">
              <Link
                to={"/mywork"}
                className="btn btn-outline-light btn-md px-4 fw-bold"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
