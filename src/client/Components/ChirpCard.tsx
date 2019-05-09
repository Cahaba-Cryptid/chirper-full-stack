import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ChirpCardProps { chirps: Chirp[] };

export interface Chirp {
    id: number,
    name: string,
    chirp: string
}

const ChirpCard: React.SFC<ChirpCardProps> = props => {

    return (
        <>
            <main className="col-md-12">
            {props.chirps.map(chirp => (
                <div key={chirp.id} className="card m-4 shadow">
                    <div className="card-body">
                        <h5 className="card-title">{chirp.name}:</h5>
                        <p className="card-text">{chirp.chirp}</p>
                        <Link className="btn btn-warning my-2" to={`/admin/${chirp.id}`}>Edit the dumb thing you said</Link>
                    </div>
                </div>
            ))}  
            </main>
        </>
    );
}

export default ChirpCard;