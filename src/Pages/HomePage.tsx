import { useAuth } from '../Hooks/useAuth';
import { useEffect } from 'react';
import { DevilFruitList } from '../Components/DevilFruitList';
import { useDevilFruit } from '../Hooks/useDevilFruit';
import { FilterBar } from '../Components/MenuOpciones';


export const HomePage: React.FC = () => {
    const { user, isLoggedIn } = useAuth();
    const { active, setActive } = useDevilFruit();

    useEffect(() => {
        console.log(user);  // Esto se ejecutará cuando 'user' cambie
        console.log(isLoggedIn);  // Esto se ejecutará cuando 'isLoggedIn' cambie
      }, [user, isLoggedIn]);


    return (
        < > 
            <div className='container-button-options'>
               <button className='btn-search' onClick={() => setActive(!active)}>Más opciones</button>
            </div>
            <DevilFruitList /> 
            <FilterBar/>

        </>
    );
  };