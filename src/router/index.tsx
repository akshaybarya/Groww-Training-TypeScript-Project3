import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";

const Router = () => {
  const addRoutes = () =>
    routes.map(({ path, element }) => (
      <Fragment key={path}>
        <Route path={path} element={element} />
      </Fragment>
    ));

  return (
    <Routes>
      <Route path="/123" element={<h1>Hello Gumys</h1>} />
      {addRoutes()}
    </Routes>
  );
};

export default Router;
