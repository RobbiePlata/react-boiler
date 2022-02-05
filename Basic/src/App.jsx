import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages";
import { PATHNAME } from "utils/constants";
import { Layout } from "components";
import 'assets/scss/global.scss';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route exact path={PATHNAME.HOME} element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App;
