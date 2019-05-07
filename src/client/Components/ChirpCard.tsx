// import * as React from 'react';
// // import { Link } from 'react-router-dom';
// // import chirps from '../../server/db/chirps';
// import { useState, useEffect } from 'react';

// export interface ChirpCardProps { };

// export interface Chirp {
//     id: number, 
//     user: string, 
//     chirp: string
// }

// const ChirpCard: React.SFC<ChirpCardProps> = props => {

//     const [ chirps, setChirps ] = useState([])
    

//     const getChirps = async () => {
//         let r = await fetch('/api/chirps');
//         let chirps = await r.json();
//         setChirps(chirps)
//     }

//     useEffect(() => {
//         getChirps();
//     }, [])

//     return (
//         <div className="col-md-12">
//             <div className="card m-2 shadow">
//                 <div className="card-body"> {chirps.map(chirp => (key={chirp.id}))}
//                     <div className="card-title"></div>
//                     <div className="card-text">{props.chirp.chirp}</div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ChirpCard;