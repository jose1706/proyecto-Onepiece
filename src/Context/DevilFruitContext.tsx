import { createContext, FC, ReactNode, useState } from "react";
import { DevilFruits } from "../types.ts";
import { devilFruits } from "../mocks/registeredDevilfruits.ts";

export interface DevilFruitContextValue {
  AllDevilFruits: DevilFruits[];
  active: boolean;
  addDevilFruit: (newFruit: DevilFruits) => void;
  removeDevilFruit: (id: number) => void;
  setActive: (active: boolean) => void;
}

export const DevilFruitContext = createContext<DevilFruitContextValue | null>(null);

export const DevilFruitProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [AllDevilFruits, setAllDevilFruits] = useState<DevilFruits[]>(devilFruits);
  const [active, setActive] = useState(false);

  const addDevilFruit = (newFruit: DevilFruits) => {
    setAllDevilFruits([...AllDevilFruits, newFruit]);
  };

  const removeDevilFruit = (id: number) => {
    setAllDevilFruits(AllDevilFruits.filter(fruit => fruit.id !== id));
  };

  return (
    <DevilFruitContext.Provider
      value={{
        AllDevilFruits,
        active,
        addDevilFruit,
        removeDevilFruit,
        setActive,
      }}
    >
      {children}
    </DevilFruitContext.Provider>
  );
};
