import { useEffect, useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { TodoListProps, Todos } from "../../types/TodoTypes";

export function TodoList({ onTodoClick }: TodoListProps) {
	const [page, setPage] = useState(1);
	const limit = 20; // 페이지당 항목 수
	const { data, error, isLoading } = useTodos(page, limit);

	const [showLoading, setShowLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false);
		}, 1000); // 1초

		return () => clearTimeout(timer);
	}, [data]);

	const handleNextPage = () => {
		if (data && page < Math.ceil(data.total / limit)) {
			setPage((prevPage) => prevPage + 1);
		} else if (data && page === Math.ceil(data.total / limit)) {
			alert("마지막 페이지 입니다.");
		}
	};

	const handlePreviousPage = () => {
		setPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const todos = data?.data ?? [];

	if (isLoading && showLoading) return <div className="text-center">Loading...</div>;
	if (error) return <div>Error</div>;

	return (
		<div className="max-w-[80%] mx-auto">
			<div className="text-3xl font-bold text-center mb-2">Todo List</div>
			<ul>
				{todos.map((todo: Todos) => (
					<li
						className="p-1 border-b-[1px] last:border-none text-lg"
						key={todo.id}
						onClick={() => onTodoClick(todo.id)}
					>
						{todo.title}
					</li>
				))}
			</ul>
			<div className="flex justify-between mt-4">
				<button
					onClick={handlePreviousPage}
					disabled={page === 1}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Previous
				</button>
				<span>Page {page}</span>
				<button onClick={handleNextPage} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
					Next
				</button>
			</div>
		</div>
	);
}
