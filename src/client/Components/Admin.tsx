import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useState, useEffect } from 'react';
import { Chirp } from './NewChirp'


export interface IAdminChirpsProps extends RouteComponentProps<{ id: string }> { }

// export interface IAdminChirpsState {
//     id: string;
//     user: string;
//     chirp: string;
// }


const Admin: React.SFC<IAdminChirpsProps> = props => {
    const [chirp, setChirp] = useState<string>('');

    const getChirp = async () => {
        let r = await fetch(`/api/chirps/${props.match.params.id}`);
        let chirp = await r.json();
        setChirp(chirp.chirp)
    }

    useEffect(() => {
        getChirp();
    }, [])

    const handleDelete = async () => {
        let id = props.match.params.id;
        try {
            await fetch(`/api/chirps/${id}`, {
                method: "DELETE"
            });
            props.history.push('/');
        } catch (e) {
            console.log(e);
        }
    }

    const handleEdit = async () => {
        let id = props.match.params.id
        let body = {
            chirp
        }
        try {
            await fetch(`/api/chirps/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            });
            props.history.push('/');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <input value={chirp} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChirp(event.target.value)}/>
            <button onClick={() => handleEdit()}>Edit</button>
            <button onClick={() => handleDelete() }>Delete</button>
        </div>
    );

}

export default Admin;