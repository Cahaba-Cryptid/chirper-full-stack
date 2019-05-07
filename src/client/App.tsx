import * as React from 'react';
import { useState, useEffect } from
    'react';
import ChirpList from './Components/ChirpList';
import './scss/app';

export interface Chirp {
    id: number,
    userid: number,
    chirp: string,
    _created: Date,
    name: string
}

const App: React.SFC<IAppProps> = props => {

    const [chirps, setChirps] = useState<Chirp[]>([]);
    const [userid, setUserid] = useState<string>('');
    const [chirp, setChirp] = useState<string>('');


    const getChirps = async () => {
        let r = await fetch('/api/chirps');
        let chirps = await r.json();
        setChirps(chirps)
    }

    useEffect(() => {
        getChirps();
    }, [])

    const addChirp = async () => {
        event.preventDefault()
        let body = { userid: 1, chirp }
        try {
            await fetch('/api/chirps', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(body)
            })
            getChirps()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form className="form-group p-3" onSubmit={() => addChirp()

            }>
                <input type="text" className="form-control my-2" value={chirp} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChirp(event.target.value)} placeholder="chirp"/>
                {/* <input type="text" className="form-control my-2" value={userid} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserid(event.target.value)}/> */}
                <input type="submit" className="btn btn-primary " />
            </form>
            <ChirpList chirps={chirps}/>
        </>
    )

}

interface IAppProps {

}

export default App;