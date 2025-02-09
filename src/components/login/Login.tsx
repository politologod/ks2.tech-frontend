import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router';
const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(import.meta.env.VITE_API, { email, password }
        ).then((response) => {
            console.log(response)
            navigate('/');
        }).catch((error) => {
            console.log(error)
        }
        )
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
                                                <h4 className="text-dark mb-4">Welcome Back!</h4>
                                            </div>
                                            <form className="user" onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <input
                                                        className="form-control form-control-user"
                                                        type="email"
                                                        id="exampleInputEmail"
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
                                                        type="password"
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <div className="custom-checkbox small">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="formCheck-1"
                                                                checked={rememberMe}
                                                                onChange={(e) => setRememberMe(e.target.checked)}
                                                            />
                                                            <label className="form-check-label" htmlFor="formCheck-1">
                                                                Remember Me
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary d-block btn-user w-100" type="submit">
                                                    Login
                                                </button>
                                                <hr />
                                                <Link to="/register" >
                                                    <button className="btn text-decoration-none btn-primary d-block btn-google btn-user w-100 mb-2" type="button">
                                                        <i className="fab fa-google"></i>&nbsp; Register
                                                    </button>
                                                </Link>

                                                <hr />
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

export default Login;
