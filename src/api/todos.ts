import { todoInstance } from "../lib/axiosInstance";
import { Todo, TodoList, Todos } from "../types/TodoTypes";

export async function getTodos(): Promise<TodoList> {
	const res = await todoInstance.get<Todos[]>(`/todos`);
	return {
		data: res.data,
		total: res.data.length,
	};
}
export async function getTodo(id: number): Promise<Todo> {
	const res = await todoInstance.get(`/todos/${id}`);
	return res.data;
}
