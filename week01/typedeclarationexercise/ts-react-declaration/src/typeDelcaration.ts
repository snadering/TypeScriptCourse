import axios, { AxiosError, AxiosPromise, AxiosResponse } from "axios";

interface User {
    name: string;
    username: string;
    email: string;
}

const getById = async <T>(userId: number): Promise<T> => {
   return await axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then((response: AxiosResponse<T>) => {
            return response.data;
        }).catch((error: AxiosError) => {
            throw error;
        });
}
const getAll = async <T>(): Promise<T[]> => {
   return await axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response: AxiosResponse<T[]>) => {
        return response.data;
    }).catch((error: AxiosError) => {
        throw error;
    });
}

const logUserInfo = (user: User) => {
    console.log(
        `Name: ${user.name}
        Username: ${user.username}
        Email: ${user.email}`
    );
}