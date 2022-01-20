import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "pages";
import { PATHNAME } from "utils/constants";

function App() {
  return (
    <Routes>
      <Route exact path={PATHNAME.HOME} element={<Home/>}/>
    </Routes>
  )
}

export default App;
