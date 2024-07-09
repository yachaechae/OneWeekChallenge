import { ModalProps } from "../types/ModalTypes";

export function Modal({ isOpen, onClose, children }: ModalProps) {
	if (!isOpen) return null;
	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 transition-opacity"
			onClick={onClose}
		>
			<div className="w-1/2 bg-white rounded p-4 pt-0 shadow-lg" onClick={(e) => e.stopPropagation()}>
				<div onClick={onClose} className="block mx-auto text-right px-2 py-2 text-red-600 rounded ">
					<span className="cursor-pointer">X</span>
				</div>
				{children}
			</div>
		</div>
	);
}
