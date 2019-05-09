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
            <div className="card row m-3 w-50 shadow">
                <div className="card-body p-1">
                    <input className="m-2" value={chirp} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChirp(event.target.value)} />
                    <button className="btn btn-warning ml-5" onClick={() => handleEdit()}>Edit</button>
                    <button className="btn btn-danger mx-3" onClick={() => handleDelete()}>Delete</button>
                </div>
            </div>
    );

}

export default Admin;