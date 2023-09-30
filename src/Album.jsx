import React from "react";
import Each from "./Each";

import ceballos from ".././public/ceballos.jpg";
import caliosa from "../public/caliosa.jpg";
import livernum from ".././public/livernum.jpg";
import celotti from ".././public/celotti.jpg";
import academic from ".././public/academic.jpg";
import web from "../public/web.jpg";
import ex from ".././public/ex.png";

const Album = () => {
  return (
    <main>
      <div class="album py-2 mb-4 bg-dark">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Each
              name="Ceballos Bienes Raíces"
              url="ceballosbienesraices"
              img={ceballos}
            />
            <Each name="Caliosa" url="caliosa" img={caliosa} />
            <Each name="Celotti S.R.L" url="celottisrl" img={celotti} />
            <Each name="Livernum" url="livernum" img={livernum} />
            <Each name="Diseño Web/UX/UI" url="web" img={web} />
            <Each name="Carrera Diseño Gráfico" url="academic" img={academic} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Album;
