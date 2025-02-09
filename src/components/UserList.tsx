import { useState, useEffect } from "react";
import { deleteUser, formatCreatedAt, getUsers, } from "../utils/api";
import { useNavigate } from "react-router";
import { CiTrash } from "react-icons/ci";

import { FaEye } from "react-icons/fa";



interface User {
    id_autoincrement: number; 
    name: string;
    email: string;
    phone: string;
    address: string;
    createdAt: string;
}
interface UserListProps {
    userlist: User[];
}

const UserList = ({ userlist }: UserListProps) => {
    const navigate = useNavigate();
    const [searchByName, setSearchByName] = useState<string>('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>(userlist);

const handlingSearch = (searchTerm: string) => {
    const filtering = userlist.filter((user) => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredUsers(filtering);
    
}

    useEffect(() => {
        if (searchByName === '') {
            setFilteredUsers(userlist);
        } else {
            handlingSearch(searchByName);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchByName, userlist, setFilteredUsers, ]);

    const handlingDelete = async (id: number) => {
        await deleteUser(id);
        const users = await getUsers();
        setFilteredUsers(users);

    }


    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Users</h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Users Info</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 text-nowrap">
                            <div id="dataTable_length" className="dataTables_length">
                                <label className="form-label">
                                    Show&nbsp;
                                    <select className="d-inline-block form-select form-select-sm">
                                        <option value="10" selected>10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-md-end dataTables_filter">
                                <label className="form-label">
                                    <input
                                        type="search"
                                        onChange={(e) => setSearchByName(e.target.value)}
                                        value={searchByName}
                                        className="form-control form-control-sm"
                                        placeholder="Search"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive table mt-2">
                        <table className="table my-0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Created At</th>
                                    <th>Address</th>
                                    <th>view</th>
                                    <th>Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {  filteredUsers.map((user: any, index: any) => (
                                    <tr key={index}>
                                        <td>
                                            {user.name}
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{formatCreatedAt(user.createdAt)}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => { navigate(`/useritem/${user.id_autoincrement}`, { state: { user } }) }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#userDetailModal"
                                            >
                                                <FaEye />
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => {
                                                    if (user.id_autoincrement) {
                                                        alert("User deleted successfully");
                                                        handlingDelete(user.id_autoincrement);

                                                    } else {
                                                        console.error("ID no válido");
                                                    }
                                                }}
                                                data-bs-toggle="modal"
                                                data-bs-target="#userDetailModal"
                                            >
                                                <CiTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td><strong>Name</strong></td>
                                    <td><strong>Email</strong></td>
                                    <td><strong>Phone</strong></td>
                                    <td><strong>Address</strong></td>
                                    <td><strong>CreatedAt</strong></td>
                                    <td><strong>view</strong></td>
                                    <td><strong>Delete</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <p className="dataTables_info">
                                Showing 1 to 10 of {userlist.length}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <nav className="d-lg-flex justify-content-lg-end">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;