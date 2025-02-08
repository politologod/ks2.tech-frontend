import React from 'react';

const NotFound: React.FC = () => {
    return (
        <main className="container-fluid">
            <div className="text-center mt-5">
                <div className="error mx-auto" data-text="404">
                    <p className="m-0">404</p>
                </div>
                <p className="text-dark mb-5 lead">Page Not Found</p>
                <p className="text-black-50 mb-0">
                    It looks like you found a glitch in the matrix...
                </p>
                <a href="/">← Back to Home</a>
            </div>
            <footer className="bg-white sticky-footer mt-5">
                <div className="container my-auto">
                    <div className="text-center my-auto copyright">
                        <span>Copyright © KS2.TECH 2025</span>
                    </div>
                </div>
            </footer>
        </main>
    );
}
export default NotFound;
