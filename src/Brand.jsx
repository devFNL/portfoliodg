import React from "react";
import Each from "./Each";
import { Link } from "react-router-dom";

import ceballos from ".././public/ceballos.jpg";
import caliosa from "../public/caliosa.jpg";
import livernum from ".././public/livernum.jpg";
import celotti from ".././public/celotti.jpg";

import ex from ".././public/ex.png";

const Brand = () => {
  return (
    <main>
      <div class="album py-2 mb-4 bg-dark">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <Each
              name="Ceballos Bienes Raíces"
              url="ceballosbienesraices"
              img={ceballos}
            />
            <Each name="Caliosa" url="caliosa" img={caliosa} />
            <Each name="Celotti S.R.L" url="celottisrl" img={celotti} />
            <Each name="Livernum" url="livernum" img={livernum} />
          </div>
        </div>
        <div className="d-flex w-50 align-items-center justify-content-center m-auto">
          <Link to={"/mywork"} className="btn btn-md btn-outline-light my-4">
            Back
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Brand;
