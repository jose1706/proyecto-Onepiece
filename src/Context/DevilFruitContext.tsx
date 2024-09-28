import { createContext, FC, ReactNode, useState, useEffect } from "react";
import { DevilFruits } from "../types.ts";
import { devilFruits } from "../mocks/registeredDevilfruits.ts";

export interface DevilFruitContextValue {
  AllDevilFruits: DevilFruits[];
  active: boolean;
  addDevilFruit: (newFruit: DevilFruits) => void;
  removeDevilFruit: (id: number) => void;
  setActive: (active: boolean) => void;
  registerDevilFruits: (name: string, image: string, description: string, type: string, user: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void
  setAllDevilFruits: (arreglo: DevilFruits[]) => void;
  checkRegisterDevilFruit: (name: string, type: string) => Number;
  updateDevilFruit: (id: number, updatedFruit: Partial<DevilFruits>) => void;
  getAllDevilFruits: () => Promise<DevilFruits[]>;
  deleteDevilFruit: (id: number) => Promise<void>;
  createDevilFruit: (fruit: DevilFruits) => Promise<void>;
  updateDevilFruitBack: (id: number, updatedFruit: Partial<DevilFruits>) => Promise<void>;
}

export const DevilFruitContext = createContext<DevilFruitContextValue | null>(null);

export const DevilFruitProvider: FC<{ children: ReactNode }> = ({ children }) => {
  //const [AllDevilFruits, setAllDevilFruits] = useState<DevilFruits[]>(devilFruits);// para trabajar sin el servidor
  const [AllDevilFruits, setAllDevilFruits] = useState<DevilFruits[]>([]);
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getAllDevilFruits = async (): Promise<DevilFruits[]> => {
    try {
      const response = await fetch('http://localhost:1234/devilfruits');
      const fruits = await response.json(); 
      return fruits;
    } catch (error) {
      console.error('Error fetching frutas:', error);
      return [];
    }
  };

  const deleteDevilFruit = async (id: number): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:1234/devilfruits/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar la fruta');
      }
  
      console.log(`fruta ${id} eliminada con éxito.`);
    } catch (error) {
      console.error('Error al eliminar la fruta:', error);
    }
  };

  const createDevilFruit = async (fruit: DevilFruits): Promise<void> => {
    try {
      const response = await fetch('http://localhost:1234/devilfruits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fruit), 
      });
  
      if (!response.ok) {
        throw new Error('Error al crear la fruta');
      }
  
      const newFruit = await response.json(); 
      console.log('fruta creada con éxito:', newFruit);
    } catch (error) {
      console.error('Error al crear fruta:', error);
    }
  };

  const updateDevilFruitBack = async ( id: number, updatedFruit: Partial<DevilFruits>): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:1234/devilfruits/${id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFruit ), 
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar fruta');
      }
  
      const updatedDevilFruit = await response.json(); 
      console.log('Fruta actualizada con éxito:', updatedDevilFruit);
    } catch (error) {
      console.error('Error al actualizar la contraseña:', error);
    }
  };

  useEffect(() => {
    getAllDevilFruits().then(fruits => setAllDevilFruits(fruits));
  }, []);

  const addDevilFruit = (newFruit: DevilFruits) => {
    setAllDevilFruits([...AllDevilFruits, newFruit]);
  };

  const checkRegisterDevilFruit = (name: string, type: string) => {
    const fruitIndex = devilFruits.findIndex(
        (fruit) => fruit.name.toLocaleLowerCase() === name.toLocaleLowerCase() && fruit.type.toLocaleLowerCase() === type.toLocaleLowerCase()
    );
    return fruitIndex;
  };

  const registerDevilFruits = (name: string, image: string, description: string, type: string, user: string) => {
    const id = (Math.floor(Math.random() * 1000) + 1);
    devilFruits.push({ id, name, image, description, type, user });
  };

  const removeDevilFruit = (id: number) => {
    const index = AllDevilFruits.findIndex(fruit => fruit.id === id);
    const updatedFruits = AllDevilFruits.filter(fruit => fruit.id !== id);
    if (index !== -1) {
      devilFruits.splice(index, 1);  //se requiere eliminar tambien del registro moqueado para que al cerrar sesion y volver a entrar se guarde la persistencia
      setAllDevilFruits(updatedFruits);
    }
  };

  const updateDevilFruit = (id: number, updatedFruit: Partial<DevilFruits>) => {
    devilFruits.forEach(fruit => {
      if (fruit.id === id) {
          Object.assign(fruit, updatedFruit); // Sobrescribe solo los atributos especificados
      }
     }); // se requiere sobreescribir directamente en devilfruit para conservar los cambios despues de que se cierre sesion.
    setAllDevilFruits(prevFruits =>
      prevFruits.map(fruit =>
        fruit.id === id ? { ...fruit, ...updatedFruit } : fruit
      )
    );
  };

  return (
    <DevilFruitContext.Provider
      value={{
        updateDevilFruitBack,
        createDevilFruit,
        deleteDevilFruit,
        getAllDevilFruits,
        searchTerm,
        setSearchTerm,
        AllDevilFruits,
        active,
        addDevilFruit,
        removeDevilFruit,
        setActive,
        registerDevilFruits, 
        setAllDevilFruits,
        checkRegisterDevilFruit,
        updateDevilFruit
      }}
    >
      {children}
    </DevilFruitContext.Provider>
  );
};
