export interface Todos {
	id: number;
	title: string;
	completed: boolean;
	userId: number;
}
export interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}
export interface TodoDetailProps {
	id: number;
}
export interface TodoListProps {
	onTodoClick: (id: number) => void;
}
export interface TodoList {
	data: Todos[];
	total: number;
}
