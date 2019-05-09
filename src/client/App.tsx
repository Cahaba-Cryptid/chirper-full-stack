import * as React from 'react';
import './scss/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home'
import NewChirp from './Components/NewChirp'
import Admin from './Components/Admin'
import Navbar from './Components/Navbar';

const App: React.SFC<IAppProps> = props => {
    
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/newchirp" component={NewChirp}></Route>
                    <Route exact path="/admin/:id" component={Admin}></Route>
                </Switch>
            </Router>
            
        </>
    )

}

interface IAppProps {

}

export default App;