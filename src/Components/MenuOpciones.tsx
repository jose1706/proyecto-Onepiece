
import { useDevilFruit } from '../Hooks/useDevilFruit';
import { useAuth } from '../Hooks/useAuth';

export const FilterBar = () => {
	const { active } = useDevilFruit();

    const { logOut } = useAuth();

	return (
		<div className={`container-filters ${active ? 'active' : ''}`}>

			<button className='sidebar-button' onClick={() => logOut()}>Cerrar sesion</button>
			
		</div>
	);
};