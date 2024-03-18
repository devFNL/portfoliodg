import { Route, Routes } from "react-router-dom";

import Hero from "./Hero";
import Navbar from "./Navbar";
import Album from "./Album";
import Details from "./Details";
import Brand from "./Brand";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Hero />} />
        <Route path={"/mywork"} element={<Album />} />
        <Route path={"details/brand"} element={<Brand />} />
        <Route path={"/details/:projName"} element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
