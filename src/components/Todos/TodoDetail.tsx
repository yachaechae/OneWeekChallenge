import { useTodo } from "../../hooks/useTodos";
import { TodoDetailProps } from "../../types/TodoTypes";

export function TodoDetail({ id }: TodoDetailProps) {
	const { data, error, isLoading } = useTodo(id);

	if (isLoading) <div className="text-center">Loading...</div>;
	if (error) return <div>An error occurred: {error.message}</div>;
	return (
		<div className="p-4 text-black">
			<h2 className="text-2xl font-bold mb-4">{data?.title}</h2>
			<p className="text-lg">
				Completed:
				<span className={`ml-2 font-semibold ${data?.completed ? "text-green-500" : "text-red-500"}`}>
					{data?.completed ? "Yes" : "No"}
				</span>
			</p>
		</div>
	);
}
