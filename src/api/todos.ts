import { instance } from "../lib/axiosInstance";
import { Todo, TodoList, Todos } from "../types/TodoTypes";

export const getTodos = async (): Promise<TodoList> => {
	const res = await instance.get<Todos[]>(`/todos`);
	return {
		data: res.data,
		total: res.data.length,
	};
};
export const getTodo = async (id: number): Promise<Todo> => {
	const res = await instance.get(`/todos/${id}`);
	return res.data;
};
