import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import livernumdata from ".././public/livernumdata.jpg";
import celottidata from ".././public/celottidata.jpg";
import academicdata from ".././public/academicdata.jpg";

import ceballosdata from ".././public/ceballosdata.jpg";
import caliosadata from ".././public/caliosadata.jpg";
import webdata from "../public/webdata.jpg";
import ex from ".././public/ex.png";

const Details = () => {
  const { projName } = useParams();

  const detailCard = {
    width: "80%",
    margin: "auto",
    background: "white",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = {
    ceballosbienesraices: {
      name: "Ceballos Bienes Raíces",
      year: "2017",
      description: "Descripción del proyecto Ceballos Bienes Raíces.",
      img: ceballosdata,
    },
    caliosa: {
      name: "Caliosa",
      year: "2018",
      description: "Descripción del proyecto Caliosa.",
      img: caliosadata,
    },
    celottisrl: {
      name: "Celotti S.R.L",
      year: "2017",
      description: "Descripción del proyecto Celotti S.R.L.",
      img: celottidata,
    },
    livernum: {
      name: "Livernum",
      year: "2018",
      description: "Descripción del proyecto Livernum.",
      img: livernumdata,
    },
    web: {
      name: "Diseño Web/UX/UI",
      year: "2016",
      description: "Descripción del proyecto Diseño Web/UX/UI.",
      img: webdata,
    },
    academic: {
      name: "Carrera Diseño Grafico",
      year: "2016",
      description: "Descripción del proyecto Carrera Diseño Grafico.",
      img: academicdata,
    },
  };

  const project = projectData[projName];

  return (
    <div className="mb-3 bg-dark">
      <div className="mb-4 bg-dark" style={detailCard}>
        <div className="col d-flex">
          <div className="card-body">
            {/* <h4 className="card-title text-center fs-2 text-white border-bottom mb-3">
              {project.name}
            </h4> */}

            {/* <p className="card-text mb-4 fs-4 border-bottom">
              <small className="text-white">{project.description}</small>
            </p> */}
            <img src={project.img} alt="" class="projData" width={"100%"} />
          </div>
        </div>
      </div>
      <div className="d-flex w-50 align-items-center justify-content-center m-auto">
        <Link to={"/mywork"} className="btn btn-md btn-outline-light">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Details;
