import { createContext, useContext, useState, ReactNode } from 'react'


interface User {
    username: string;
    password: string;
}

interface AuthContextProps {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(getUser());

    
    const login = (user: User) => {
        window.localStorage.setItem('username', user.username)
        window.localStorage.setItem('password', user.password)
        setAuthenticatedUser(user)
        console.log('Successfully logged in! \nCredentials saved in LocalStorage')
    }
    
    const logout = () => {
        window.localStorage.removeItem('username')
        window.localStorage.removeItem('password')
        setAuthenticatedUser(null)
        console.log('Successfully logged out! \nCredentials removed from LocalStorage')
    }

    return (
        <AuthContext.Provider value={{ user: authenticatedUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
    
}

export default function useAuth(): AuthContextProps {
    const context = useContext(AuthContext);
    if(!context) console.log('missing auth provider')
    return context as AuthContextProps;
}

    const getUser = (): User => {
        const username = window.localStorage.getItem('username');
        const password = window.localStorage.getItem('password');
        if(username && password){
            const user: User = {
                username: username,
                password: password
            }
            return user;
        }
        return {
            username: '',
            password: ''
        }
    }
    
    
 