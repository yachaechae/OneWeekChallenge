import axios from "axios";
import { getLocalStorage } from "../util/localStorage";
const token = getLocalStorage();
export const todoInstance = axios.create({
	baseURL: import.meta.env.VITE_TODO_BASE_URL as string,
});

export const gomuksuInstance = axios.create({
	baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
	headers: {
		Authorization: `${token}`,
	},
});
