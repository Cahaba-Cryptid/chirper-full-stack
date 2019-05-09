import * as React from 'react';
import { useEffect, useState } from 'react';
import ChirpCard from '../Components/ChirpCard'

export interface Chirp {
    id: number,
    userid: number,
    chirp: string,
    _created: Date,
    name: string
}

const Home = () => {

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
            {/* <form className="form-group p-3" onSubmit={() => addChirp()

            }>
                <input type="text" className="form-control my-2" value={chirp} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChirp(event.target.value)} placeholder="chirp" />
                {/* <input type="text" className="form-control my-2" value={userid} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserid(event.target.value)} /> */}
                {/* <input type="submit" className="btn btn-primary " />
            </form> */} 
            <ChirpCard chirps={chirps} />
        </>

    )

}


export default Home;

