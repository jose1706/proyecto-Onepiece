import { useContext } from "react";
import { DevilFruitContext } from "../Context/DevilFruitContext";

export const useDevilFruit = () => {
    const context = useContext(DevilFruitContext);
    if (context) return context;
    throw new Error("You have to set up an UserProvider to use this hook");
};