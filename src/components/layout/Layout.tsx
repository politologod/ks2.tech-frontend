import React from 'react';
import {Outlet, useNavigate} from 'react-router';
import { useAuth } from '../../context/AuthContext';
const Layout: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate('/');
    }
    return (
        <div id="page-top">
            <div id="wrapper">
                {/* Sidebar */}
                <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark">
                    <div className="container-fluid d-flex flex-column p-0">
                        <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">
                                <span>KS2.TECH</span>
                            </div>
                        </a>
                        <hr className="sidebar-divider my-0" />
                        <ul className="navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <i className="fas fa-tachometer-alt"></i>
                                    <span>Users List</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/profile">
                                    <i className="fas fa-user"></i>
                                    <span>Profile</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" onClick={handleLogout}>
                                    <i className="far fa-user-circle"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                        <div className="text-center d-none d-md-inline">
                            <button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
                        </div>
                    </div>
                </nav>

                {/* Content Wrapper */}
                <div className="d-flex flex-column" id="content-wrapper">
                    {/* Topbar */}
                    <nav className="navbar navbar-expand bg-white shadow mb-4 topbar">
                        <div className="container-fluid">
                            <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
                                <i className="fas fa-bars"></i>
                            </button>
                            <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input className="bg-light form-control border-0 small" type="text" placeholder="Search for..." />
                                    <button className="btn btn-primary py-0" type="button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                            <ul className="navbar-nav flex-nowrap ms-auto">
                                {/* Alert Dropdowns y User Menu */}
                                {/* ... (mantener el mismo código de los dropdowns de notificaciones y usuario) */}
                            </ul>
                        </div>
                    </nav>

                    {/* Contenido Principal */}
                    <div id="content">
                        <div className="container-fluid"><Outlet/></div>
                    </div>

                    {/* Footer */}
                    <footer className="bg-white sticky-footer">
                        <div className="container my-auto">
                            <div className="text-center my-auto copyright">
                                <span>Copyright © KS2.TECH 2025</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Layout;