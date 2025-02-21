import { createContext, isValidElement, useContext, useState } from "react"

const defaultTasks = [
    { id: '1', titulo: "Crear BDD", descripcion: "Creacion de la base de datos sql." },
    { id: '2', titulo: "Arreglar bug del ui", descripcion: "La pantalla de inicio se pone en blanco" },
    { id: '3', titulo: "Hacer pull request", descripcion: "Integrar los commits al repositorio" },
]
type User = {
    email: string,
    tasks: Array<Task>
} | null;
export type Task = {
    id: string,
    titulo: string,
    descripcion: string,
} | null;
const AuthContext = createContext<{
    user: User,
    isAllowed: boolean;
    login: (email: string) => void;
    logout: () => void;
    addTask: (task: Task) => void;
} | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return context;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(null);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);

    const login = (email: string) => {
        const isValidEmail = true || email.endsWith('@gmail.com');

        if (isValidEmail) {
            setUser({ email, tasks: defaultTasks });
            setIsAllowed(true);
        } else {
            setUser(null);
            setIsAllowed(false);
            alert("Formato de correo invalido")
        }
    };

    const logout = () => {
        setUser(null);
        setIsAllowed(false);
    }

    const addTask = (task: Task) => {
        const taskArray = [...(user?.tasks as Array<Task>), task];
        if (user != null) {
            setUser({ email: user.email, tasks: taskArray });
        }

    }

    return (
        <AuthContext.Provider value={{ user, isAllowed, login, logout, addTask }}>
            {children}
        </AuthContext.Provider>
    )

}