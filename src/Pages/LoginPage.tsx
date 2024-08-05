import '../Pages/LoginPage.tsx';
import '../Styles/LoginPage.css'
import { FaUser, FaLock } from "react-icons/fa";




export const Login = ()=> {
    return (
        <div className="wrapper">
            <form>
                <h1>Login</h1>

                <div className="input-box">
                    <input type="text" placeholder='Nombre de usuario' required/><FaUser className='icon'/>

                </div>

                <div className="input-box">
                    <input type="password" placeholder='Contraseña' required/><FaLock className='icon'/>

                </div>

                <div className="register-forgot">
                    <label><input type='checkbox' /> Recuerdame</label>
                    <a href="#">olvido su contraseña?</a>
                </div>
                
                <button type="submit">Iniciar sesión</button>
                
                <div className="register-link">
                    <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p>
                </div>
            </form>
        </div>
  );
};
    