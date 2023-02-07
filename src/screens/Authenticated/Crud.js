import React, { useEffect, useState } from 'react';
import Navbar from '../../routes/AuthenticatedLayout/Navbar';
import { URLS } from '../../utils/constants/urls';
import axios from 'axios';

export default function Crud() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get(URLS.users);
        setUsers(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(URLS.deleteUserById(id));
        loadUsers();
      };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="py-4">
                    <h3>Users</h3>
                    {users?.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table border shadow">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.address.city}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <button type="button" class="btn btn-primary m-2"><i class="fa fa-eye"></i></button>
                                                <button type="button" class="btn btn-warning m-2"><i class='fas fa-edit'></i></button>
                                                <button type="button" class="btn btn-danger m-2"  onClick={() => deleteUser(user.id)}><i class="fa fa-trash"></i></button>                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (<h1>no user found</h1>)}
                </div>
            </div>
        </div>
    )
}
