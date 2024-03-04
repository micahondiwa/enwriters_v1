import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import HomePage from './components/Home';
import ArticlesPage from './components/Articles';
import ContactPage from './components/Contact';
import GetStartedPage from './components/GetStarted';
import LoginPage from './components/Login';
import LogoutPage from './components/Logout';

const App = () => {


    return (
        <Router>
            <div className='container'>
                <NavBar />
                <Switch>
                    <Route path='/Articles'>
                        <ArticlesPage />
                    </Route>
                    <Route path='/Contact'>
                        <ContactPage />
                    </Route>
                    <Route path='/GetStarted'>
                        <GetStartedPage />
                    </Route>
                    <Route path='/Login'>
                        <LoginPage />
                    </Route>
                    <Route path='/Logout'>
                        <LogoutPage />
                    </Route>
                    <Route path='/SignUp'>
                        <SignupPage />
                    </Route>
                    <Route path='/Home'>
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
ReactDOM.render(<App />, document.getElementById('root'))