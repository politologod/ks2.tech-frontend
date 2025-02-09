import React, { useState } from 'react';
import { createUser } from '../utils/api';

interface AddUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose, onSubmit }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');




    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await createUser({
                name: name,
                email: email,
                phone: phone,
                address: address,
            });
            onSubmit(); 
            onClose(); 
        } catch {
            alert('Error creando usuario');
        }
    };

    if (!isOpen) return null; 

    return (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Nuevo Usuario</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    name="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={
                                        (e) => setName(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    name="phone"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    className="form-control"
                                    name="address"
                                    placeholder="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>

                            <button className="btn btn-primary w-100">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUserModal;
