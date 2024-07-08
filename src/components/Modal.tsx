import { ModalProps } from "../types/ModalTypes";

export function Modal({ isOpen, onClose, children }: ModalProps) {
	if (!isOpen) return null;
	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 transition-opacity"
			onClick={onClose}
		>
			<div className="bg-white rounded p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
				{children}
				<button
					onClick={onClose}
					className="block mx-auto mt-4 px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Close
				</button>
			</div>
		</div>
	);
}
