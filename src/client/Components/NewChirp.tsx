// import * as React from 'react';
// import { useEffect, useState } from 'react'

// const AddChirp = () => {

//     const [chirps, setChirps] = useState<Chirp[]>([]);
//     const [chirp, setChirp] = useState<string>('');

//     const getChirps = async () => {
//         let r = await fetch('/api/chirps');
//         let chirps = await r.json();
//         setChirps(chirps)
//     }
    
//     useEffect(() => {
//         getChirps();
//     }, [])
    
//     const addChirp = async () => {
//         event.preventDefault()
//         let body = { userid: 1, chirp }
//         try {
//             await fetch('/api/chirps', {
//                 method: "POST",
//                 headers: { "content-type": "application/json" },
//                 body: JSON.stringify(body)
//             })
//             getChirps()
//         } catch (error) {
//             console.log(error)
//         }
//     }

// }

