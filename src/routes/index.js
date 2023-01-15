import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Navbar from './AuthenticatedLayout/Navbar'
import Crud from '../screens/Authenticated/Crud';

function index() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Crud} />
            </Switch>
        </Router>
    )
}

export default index

