import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');
    const navigate = useNavigate();
    const { login} = useAuth();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const api = axios.create({
            baseURL: import.meta.env.VITE_API,
            withCredentials: true
        });
        try {
            await api.post(`${import.meta.env.VITE_API}/auth/register`, { email, password, address, phone, name }, { withCredentials: true });
            await login();
            navigate('/crud');
        } catch (error: any) {
            if (error.response) {
                console.error('Error registering:', error.response.data);
            } else {
                console.error('Error registering:', error);
            }
        }

        console.log({ email, password, address, phone, name });
    };


    return (
        <div className="bg-gradient-primary" style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-12 col-xl-10">
                        <div className="card shadow-lg o-hidden border-0 my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-flex">
                                        <div
                                            className="flex-grow-1 bg-login-image"
                                            style={{
                                                backgroundImage: 'url(assets/img/dogs/image3.jpeg)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        ></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">Register</h4>
                                            </div>
                                            <form className="user" onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <input
                                                        className="form-control form-control-user"
                                                        type="text"
                                                        id="displayNameId"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Full Name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <input
                                                        className="form-control form-control-user"
                                                        type="email"
                                                        id="emailId"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <input
                                                        className="form-control form-control-user"
                                                        type="text"
                                                        id="phoneId"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter Phone Number..."
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <input
                                                        className="form-control form-control-user"
                                                        type="text"
                                                        id="addressId"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter your Address!"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <input
                                                        className="form-control form-control-user"
                                                        type="password"
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <button type="submit" className="btn text-decoration-none btn-primary d-block btn-google btn-user w-100 mb-2">
                                                    <i className="fab fa-google"></i>&nbsp; Register
                                                </button>


                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
