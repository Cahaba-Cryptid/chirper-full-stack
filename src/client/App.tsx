import * as React from 'react';
import { useState, useEffect } from 'react';


import './scss/app';

const App: React.SFC<IAppProps> = props => {

    const [chirps, setChirps] = useState([]);


    const getChirps = async () => {
        let r = await fetch('/api/chirps');
        let chirps = await r.json();
        chirps.reverse();
        setChirps(chirps)
    }

    useEffect(() => {
        getChirps();
    }, [])

    return (
        <main className="container">
            <ul className="col-md-6 offset-md- list-group">{chirps.map(chirp => (
                <li key={chirp.id} className="list-group-item d-flex justify-content-between">
                    <h3>{chirp.userid}</h3>
                    <p>{chirp.chirp}</p>
                </li>
            ))}
            </ul>
        </main >
    )

}

interface IAppProps {

}

export default App;