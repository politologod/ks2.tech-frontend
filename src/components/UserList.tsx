import { useEffect, useState } from "react";
//import { getUserById, getUsers, updateUser, createUser, deleteUser } from "../../utils/usersUtils";

interface Users {
    id: number;
    name: string;
    email: string;
    phone  : string;
    createdAt : string;
    address: string;
}



const UserList = () => {

    const [users, setUsers] = useState<Users[]>([]);

        useEffect(() => {
            const fetchUsers = async () => {
                const users = await getUsers();
                setUsers(users);
                console.log(users);
            }
            
            fetchUsers();
        }, []);

    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Team</h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Employee Info</p>
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
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                className="rounded-circle me-2"
                                                width="30"
                                                height="30"
                                                src={employee.image}
                                                alt={employee.name}
                                            />
                                            {employee.name}
                                        </td>
                                        <td>{employee.position}</td>
                                        <td>{employee.office}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.startDate}</td>
                                        <td>{employee.salary}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td><strong>Name</strong></td>
                                    <td><strong>Email</strong></td>
                                    <td><strong>Phone</strong></td> 
                                    <td><strong>Age</strong></td>
                                    <td><strong>Start date</strong></td>
                                    <td><strong>Salary</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <p className="dataTables_info">
                                Showing 1 to 10 of {employees.length}
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

export default Main;