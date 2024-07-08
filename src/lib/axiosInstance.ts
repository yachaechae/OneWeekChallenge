import axios from "axios";

export const instance = axios.create({
	// baseURL: import.meta.env.VITE_AXIOS_BASE_URL as string,
	baseURL: `https://jsonplaceholder.typicode.com`,
});
