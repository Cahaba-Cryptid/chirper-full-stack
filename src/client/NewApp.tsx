import * as React from 'react';
import { useState, useEffect } from
    'react';
import ChirpList from './Components/ChirpList';
import './scss/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './Views/Home'
// import NewChrip from './Components/NewChirp'
// import Admin from './Components/Admin'
import Navbar from './Components/Navbar';

export interface Chirp {
    id: number,
    userid: number,
    chirp: string,
    _created: Date,
    name: string
}

const App: React.SFC<IAppProps> = props => {

    const [chirps, setChirps] = useState<Chirp[]>([]);
    // const [userid, setUserid] = useState<string>('');
    const [chirp, setChirp] = useState<string>('');


    const getChirps = async () => {
        let r = await fetch('/api/chirps');
        let chirps = await r.json();
        setChirps(chirps)
    }

    useEffect(() => {
        getChirps();
    }, [])

    

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/newchirp" component={NewChirp}></Route>
                    <Route exact path="/admin" component={Admin}></Route>
                </Switch>
            </Router>
            
        </>
    )

}

interface IAppProps {

}

// export default App;