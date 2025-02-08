import React, { useState } from 'react';
import { createUser } from '../utils/api';

interface User {
    id_autoincrement?: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    createdAt: string;
}

interface AddUserProps {
    userData: User;
}

const AddUser = ({ userData }: AddUserProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para enviar los datos
        createUser({ id: 0, name, email, phone, address, createdAt: '' });
        setShowModal(false); // Cerrar el modal después de enviar
    };

    return (
        <div>
            {/* Botón para abrir el modal */}
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Open User Modal
            </button>

            {/* Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex={-1} style={{ display: showModal ? 'block' : 'none' }} aria-labelledby="userModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="userModalLabel">Create User</h5>
                            <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <p className="text-primary m-0 fw-bold">User Settings</p>
                                </div>
                                <div className="card-body">
                                    <form className="user" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <input
                                                className="form-control form-control-user"
                                                type="text"
                                                value={name}
                                                placeholder={userData.name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                className="form-control form-control-user"
                                                type="email"
                                                value={email}
                                                placeholder={userData.email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                className="form-control form-control-user"
                                                type="text"
                                                value={phone}
                                                placeholder={userData.phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                className="form-control form-control-user"
                                                type="text"
                                                value={address}
                                                placeholder={userData.address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-user w-100"
                                        >
                                            Create User
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {showModal && (
                <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>
            )}
        </div>
    );
};

export default AddUser;
