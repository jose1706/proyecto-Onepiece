import { useContext } from "react";
import { UserContext } from "../Context/userContext";

export const useAuth = () => {
    const context = useContext(UserContext);
    if (context) return context;
    throw new Error("You have to set up an UserProvider to use this hook");
};