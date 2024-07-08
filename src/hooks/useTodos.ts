import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getTodo, getTodos } from "../api/todos";
import { todoQueryKey, todosQueryKey } from "../queryKeys/todos";
import { Todo, TodoList } from "../types/TodoTypes";

export const useTodos = (page: number, limit: number) => {
	return useQuery<TodoList>({
		queryKey: [todosQueryKey, page, limit],
		queryFn: async () => {
			const res = await getTodos();
			const start = (page - 1) * limit;
			const end = start + limit;
			return {
				data: res.data.slice(start, end),
				total: res.total,
			};
		},
	});
};
export const useTodo = (id: number): UseQueryResult<Todo, Error> => {
	return useQuery({
		queryKey: [todoQueryKey],
		queryFn: () => getTodo(id),
	});
};
