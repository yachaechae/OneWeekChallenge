import React, { useState } from "react";
import { Modal } from "../components/Modal";
import { TodoList } from "../components/Todos/TodoList";
import { TodoDetail } from "../components/Todos/TodoDetail";

export default function Todos() {
	const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);

	const openModal = (id: number) => {
		setSelectedTodoId(id);
	};

	const closeModal = () => {
		setSelectedTodoId(null);
	};

	return (
		<div className="px-2 justify-center w-screen">
			<TodoList onTodoClick={openModal} />
			<Modal isOpen={selectedTodoId !== null} onClose={closeModal}>
				{selectedTodoId !== null && <TodoDetail id={selectedTodoId} />}
			</Modal>
		</div>
	);
}
