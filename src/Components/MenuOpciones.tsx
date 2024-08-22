
import { useDevilFruit } from '../Hooks/useDevilFruit';
import { useAuth } from '../Hooks/useAuth';
import { Link } from 'react-router-dom';

export const FilterBar = () => {
	const { active, setActive } = useDevilFruit();

    const { logOut } = useAuth();

	return (
		<div className={`container-filters ${active ? 'active' : ''}`}>

			<button className='sidebar-button' onClick={() => logOut()}>Cerrar sesion</button>
			<Link className="sidebar-link" to="RegisterDevilFruitPage"><button className='sidebar-button'>Ingresar fruta nueva</button> </Link>
			<button className="sidebar-button" onClick={() => setActive(!active)}>Menos opciones</button>
		</div>
	);
};