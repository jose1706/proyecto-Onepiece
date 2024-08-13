import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const {  isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        //window.alert('Debe iniciar sesion para accceder al menu');
        return <Navigate to="/" />;
    }

    return <>{children}</>;
    };