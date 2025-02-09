import {useEffect, useState} from 'react';
import { useNavigate, Outlet } from 'react-router';
import { useAuth } from '../../context/AuthContext';


const AuthLayout: React.FC = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            // Esperar 500ms para dar tiempo a las cookies
            await new Promise(resolve => setTimeout(resolve, 500));
            
            if (!isAuthenticated) {
                navigate('/');
            }
            setChecked(true);
        };
        
        checkAuth();
    }, [isAuthenticated, navigate]);

    if (!checked) return <div>Verificando autenticación...</div>;
    
    return isAuthenticated ? <Outlet /> : null;
};

export default AuthLayout;