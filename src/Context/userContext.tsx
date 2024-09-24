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
    register: (username: string, password: string, email: string) => boolean;
    updatePassword: (username: string, newPassword: string) => void;
    checkRegisterPassword: (username: string) => number;
    getAllUsers: () => Promise<User[]>;
    createUser: (user: Partial<User>) => Promise<void>;
    updateUserPassword: (password: string, id: number) => void;
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

    const getAllUsers = async (): Promise<User[]> => {
        try {
          const response = await fetch('http://localhost:1234/users');
          const users = await response.json(); // Esto es un arreglo de usuarios
          return users;
        } catch (error) {
          console.error('Error fetching users:', error);
          return [];
        }
      };

      const createUser = async (user: Partial<User>): Promise<void> => {
        try {
          const response = await fetch('http://localhost:1234/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user), // Los datos del nuevo usuario
          });
      
          if (!response.ok) {
            throw new Error('Error al crear el usuario');
          }
      
          const newUser = await response.json(); // Respuesta del servidor
          console.log('Usuario creado con éxito:', newUser);
        } catch (error) {
          console.error('Error al crear usuario:', error);
        }
      };
    

      const updateUserPassword = async ( password: string, id: number): Promise<void> => {
        try {
          const response = await fetch(`http://localhost:1234/users/${id}`, {
            method: 'PATCH', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }), 
          });
      
          if (!response.ok) {
            throw new Error('Error al actualizar la contraseña');
          }
      
          const updatedUser = await response.json(); 
          console.log('Contraseña actualizada con éxito:', updatedUser);
        } catch (error) {
          console.error('Error al actualizar la contraseña:', error);
        }
      };

    const checkRegisterPassword = (username: string) => {
        const userIndex = registeredUsers.findIndex(
            (user) => user.username === username
        );
        return userIndex;
    };

    const register = (username: string, password: string, email: string) => {
        const userIn = registeredUsers.findIndex(
            (user) => user.username === username
        );
        const id = (Math.floor(Math.random() * 1000) + 1);
        if (userIn === -1) {
            registeredUsers.push({ id, username, password, email });
            return true;
        }else {
            window.alert('Nombre de usuario ya existente, por favor ingrese uno diferente');
            return false;
        }
    };

    const updatePassword = (username: string, newPassword: string) => {

        const user = registeredUsers.find(user => user.username === username);
        if (user) {
            user.password = newPassword;
        }

    }


    return (
        <UserContext.Provider
            value={{
                updateUserPassword,
                createUser,
                getAllUsers,
                checkRegisterPassword,
                updatePassword,
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