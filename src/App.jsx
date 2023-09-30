import { Route, Routes } from "react-router-dom";

import Hero from "./Hero";
import Navbar from "./Navbar";
import Album from "./Album";
import Details from "./Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Hero />} />
        <Route path={"/mywork"} element={<Album />} />
        <Route path={"/details/:projName"} element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
