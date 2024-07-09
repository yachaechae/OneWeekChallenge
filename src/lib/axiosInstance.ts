import axios from "axios";

export const todoInstance = axios.create({
	baseURL: import.meta.env.VITE_TODO_BASE_URL as string,
});

export const gomuksuInstance = axios.create({
	baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
});
