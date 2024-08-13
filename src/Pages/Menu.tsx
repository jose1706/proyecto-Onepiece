import { useAuth } from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export const Menu: React.FC = () => {
    const { logOut, user, isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);  // Esto se ejecutará cuando 'user' cambie
        console.log(isLoggedIn);  // Esto se ejecutará cuando 'isLoggedIn' cambie
      }, [user, isLoggedIn]);

    const handleLogOut = () => {
        logOut();
        navigate('/');
     };

    return (
        <div className="wrapper">
            <h1>Menu</h1>
            <button onClick={handleLogOut}>Cerrar sesion</button>
        </div>
    );
  };