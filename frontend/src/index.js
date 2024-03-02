import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const App = () => {


    return (
        <Router>
            <div className='container'>
                <NavBar />
            </div>
        </Router>
    );
};
ReactDOM.render(<App />, document.getElementById('root'))