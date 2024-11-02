import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import { routes } from "../utils/constants/routes";
import Crud from "../screens/Authenticated/Crud";
import Utilities from "../screens/Authenticated/Utilities";
import Editor from "../screens/Authenticated/Editor";
import Mode from "../screens/Authenticated/Mode";
import Error from "../common/Error";

function Index() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to={routes.Crud} />} />
        <Route exact path={routes.Crud} element={<Crud />} />
        <Route exact path={routes.Utilities} element={<Utilities />} />
        <Route exact path={routes.Editor} element={<Editor />} />
        <Route exact path={routes.Mode} element={<Mode />} />
        <Route path="*" element={<Error />} />
      </Switch>
    </Router>
  );
}

export default Index;
