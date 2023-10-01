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
            Diseñador gráfico freelance de Argentina con más de 7 años de
            experiencia, incluyendo 2 años como Gerente de Marca e Imagen. Mi
            pasión por el diseño es firme, y me impulsa la búsqueda constante de
            la excelencia en cada proyecto. Abordo mis proyectos con una
            profunda apreciación por la teoría, el contexto, la vanguardia y los
            fundamentos históricos del diseño , asegurando que cada pieza visual
            se elabore minuciosamente hasta alcanzar su máximo potencial. A lo
            largo de mi carrera, me he especializado en el diseño de marcas,
            aprovechando mis habilidades para dar forma y mejorar las
            identidades visuales.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              to={"/mywork"}
              class="btn btn-outline-light btn-md px-4 fw-bold"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
