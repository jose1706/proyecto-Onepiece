import { createContext, FC, ReactNode, useState } from "react";
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
}

export const DevilFruitContext = createContext<DevilFruitContextValue | null>(null);

export const DevilFruitProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [AllDevilFruits, setAllDevilFruits] = useState<DevilFruits[]>(devilFruits);
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <DevilFruitContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        AllDevilFruits,
        active,
        addDevilFruit,
        removeDevilFruit,
        setActive,
        registerDevilFruits, 
        setAllDevilFruits,
        checkRegisterDevilFruit
      }}
    >
      {children}
    </DevilFruitContext.Provider>
  );
};
