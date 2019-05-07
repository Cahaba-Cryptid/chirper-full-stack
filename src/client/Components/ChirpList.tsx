import * as React from 'react';
import { useState, useEffect } from 'react';

export interface ChirpCardProps { chirps: Chirp[] };

export interface Chirp {
    id: number,
    name: string,
    chirp: string
}

const ChirpCard: React.SFC<ChirpCardProps> = props => {

    // const [chirps, setChirps] = useState([])


    // const getChirps = async () => {
    //     let r = await fetch('/api/chirps');
    //     let chirps = await r.json();
    //     setChirps(chirps)
    // }

    // useEffect(() => {
    //     getChirps();
    // }, [])

    return (
        <main className="container">
            <ul className="col-md-6 offset-md- list-group">{props.chirps.map(chirp => (
                <li key={chirp.id} className="list-group-item d-flex justify-content-between">
                    <h4>{chirp.name}:</h4>
                    <p>{chirp.chirp}</p>
                </li>
            ))}
            </ul>
        </main >
    );
}

export default ChirpCard;