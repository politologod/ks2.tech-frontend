import {useEffect, useState} from 'react';
import { useNavigate, Outlet } from 'react-router';
import { useAuth } from '../../context/AuthContext';


const AuthLayout: React.FC = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const { login } = useAuth();
    useEffect(() => {
        const checkAuths = async () => {
            // Esperar 500ms para dar tiempo a las cookies
            await login();
            
            setChecked(true);
            if (!isAuthenticated) {
                navigate('/login');
            }
        };
        checkAuths();
        
    }, [isAuthenticated, navigate]);

    if (!checked) return <div>Verificando autenticación...</div>;
    
    return isAuthenticated ? <Outlet /> : null;
};

export default AuthLayout;