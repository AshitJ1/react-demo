import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { routes } from '../utils/constants/routes'
import Navbar from './AuthenticatedLayout/Navbar'
import Crud from '../screens/Authenticated/Crud';

function index() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path={routes.Crud} element={<Crud/>} />
            </Switch>
        </Router>
    )
}

export default index

