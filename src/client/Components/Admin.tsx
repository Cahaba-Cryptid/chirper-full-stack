import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useState, useEffect } from 'react';
import { Chirp } from './NewChirp'


export interface IAdminChirpsProps extends RouteComponentProps<{ id: string }> { }

export interface IAdminChirpsState {
    id: string;
    user: string;
    chirp: string;
}

const Admin: React.SFC<IAdminChirpsProps> = props => {
    const [chirps, setChirps] = useState<Chirp[]>([])

    const getChirps = async () => {
        let id = this.props.match.params.id;
        try {
            let r = await fetch(`/api/chirps/${id}`);
            let [chirp] = await r.json();
            this.setState({
                id: chirp.id,
                user: chirp.user,
                chirp: chirp.chirp,
            });
        } catch (e) {
            console.log(e);
        }
    }

    // const handleDelete = async () => {
    //     let id = this.props.match.params.id;
    //     try {
    //         await fetch(`/api/chirps/${id}`, {
    //             method: "DELETE"
    //         });
    //         this.props.history.push('/');
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    const handleEdit = async () => {
        let id = this.props.match.params.id;
        let data = {
            chirp: this.state.chirp
        }
        console.log(data)
        try {
            await fetch(`/api/chirps/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            this.props.history.replace('/');
        } catch (e) {
            console.log(e);
        }
    }

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card m-2">
                        <div className="card-body">
                            {/* <p>{this.state.user}</p> */}
                            <input value={this.state.user} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ user: e.target.value })} className="card-text d-block" id="editTextInput" placeholder="Updated user" />
                            <input value={this.state.chirp} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ chirp: e.target.value })} className="card-text d-block" id="editTextInput" placeholder="Updated chirp" />
                            <div className="d-flex justify-content-between align-items-center">
                                <button onClick={this.handleEdit} className="btn btn-info mt-2">Save Changes</button>
                                <button onClick={this.handleDelete} className="btn btn-danger mt-2">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default Admin;