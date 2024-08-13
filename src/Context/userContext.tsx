import { createContext, FC, ReactNode, useState } from "react";
import { User } from "../types.ts";
import { registeredUsers } from "../mocks/registeredUsers.ts";

export interface UserContextValue {
    isLoggedIn: boolean;
    user: User | null;
    checkRegister: (username: string, password: string) => number;
    logOut: () => void;
    logIn: (user: User) => void;
    setUsername: (username: User["username"]) => void;
    setEmail: (email: User["email"]) => void;
    register: (username: string, password: string, email: string) => void;
}

export const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const checkRegister = (username: string, password: string) => {
        const userIndex = registeredUsers.findIndex(
            (user) => user.username === username && user.password === password
        );
        return userIndex;
    };

    const register = (username: string, password: string, email: string) => {
        registeredUsers.push({ username, password, email });
    };


    return (
        <UserContext.Provider
            value={{
                checkRegister,
                register,
                isLoggedIn,
                logIn: user => {
                    setUser(user);
                    setIsLoggedIn(true);
                },
                logOut: () => {
                    setUser(null);
                    setIsLoggedIn(false);
                },
                user,
                setUsername: username => {
                    if (isLoggedIn && user) {
                        setUser({ ...user, username });
                    }
                },
                setEmail: email => {
                    if (isLoggedIn && user) {
                        setUser({ ...user, email });
                    }
                }
            }}>
            {children}
        </UserContext.Provider>
    );
};