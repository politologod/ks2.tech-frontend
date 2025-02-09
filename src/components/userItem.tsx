import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { updateUser } from '../utils/api';

interface User {
    id_autoincrement: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    createdAt?: string;
}

const UserItem: React.FC = () => {


    const location = useLocation();
    const userData = location.state?.user as User;
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>(userData?.email || '');
    const [address, setAddress] = useState<string>(userData?.address || '');
    const [phone, setPhone] = useState<string>(userData?.phone || '');
    const [name, setName] = useState<string>(userData?.name || '');

    useEffect(() => {
        if (userData) {
            setEmail(userData.email);
            setAddress(userData.address);
            setPhone(userData.phone);
            setName(userData.name);
        }
        console.log('User data:', userData);
    }, [userData]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!userData?.id_autoincrement) {
                throw new Error("ID de usuario no válido");
            }
            
            const response = await updateUser(userData.id_autoincrement, {
                email,
                address,
                phone,
                name,
            });
            console.log('Update successful:', response);
            navigate('/crud');
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">{userData.name}</h3>
            <div className="row mb-3">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col">
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
                                            onClick={() => {alert('User updated')}}
                                        >
                                            Update User
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;