import React from "react";
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { routes } from '../utils/constants/routes'
import Navbar from './AuthenticatedLayout/Navbar'
import Crud from '../screens/Authenticated/Crud';
import Utilities from '../screens/Authenticated/Utilities';
import Editor from '../screens/Authenticated/Editor';
import Mode from '../screens/Authenticated/Mode';
import Error from '../common/Error';

function Index() {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path={routes.Crud} element={<Crud />} />
                <Route exact path={routes.Utilities} element={<Utilities />} />
                <Route exact path={routes.Editor} element={<Editor />} />
                <Route exact path={routes.Mode} element={<Mode />} />
                <Route path="*" element={<Error />} />
            </Switch>
        </Router>
    )
}

export default Index;

