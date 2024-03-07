import { useState } from 'react'


interface User {
    username: string,
    password: string
}



export const login = (user: User) => {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('password', user.password)
    console.log('Successfully logged in! \nCredentials saved in LocalStorage')
}

export const logout = () => {
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('password')
    console.log('Successfully logged out! \nCredentials removed from LocalStorage')
}

export const getUser = (): User => {
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


export default function useAuth() {

    const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(getUser);

    const loginHandler = (user: User) => {
        login(user);
        setAuthenticatedUser(user)
    }

    const logoutHandler = () => {
        logout();
        setAuthenticatedUser(null)
    }

    return {
        login: loginHandler,
        logout: logoutHandler,
        user: getUser
    }

}
 