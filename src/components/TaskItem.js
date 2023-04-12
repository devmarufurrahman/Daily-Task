import { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { DeleteHandlerContext, EditHandlerContext } from "../App";

const TaskItem = ({ task, handleEditSubmit, editingText, setEditingText }) => {
	const deleteHandler = useContext(DeleteHandlerContext);

	const editHandler = useContext(EditHandlerContext);

	const [isCheck, setIsCheck] = useState(false);

	return (
		<div className="task-item flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-r hover:from-teal-800 hover:to-gray-800 group">
			<div className="task-item-left flex gap-2">
				<span>
					<input
						type="checkbox"
						className="accent-teal-500 "
						checked={isCheck}
						onChange={() => setIsCheck(!isCheck)}
					/>
				</span>

				{task.isEditable && (
					<form onSubmit={(e) => handleEditSubmit(e, task.id)}>
						<input
							className="bg-transparent outline-none border-b-2 pv-1 border-gray-500 focus:border-teal-500"
							type="text"
							required
							value={editingText}
							onChange={(e) => setEditingText(e.target.value)}
						/>
					</form>
				)}

				{!task.isEditable && (
					<p
						className={`group-hover:text-teal-400 ${
							isCheck
								? `line-through text-gray-500 group-hover:text-teal-600`
								: null
						}`}>
						{task.text}
					</p>
				)}
			</div>
			<div className="task-item-right flex gap-2">
				<button onClick={() => editHandler(task.id)}>
					<FiEdit className="hover:text-teal-600 hover:cursor-pointer" />
				</button>
				<button onClick={() => deleteHandler(task.id)}>
					<FiTrash className="hover:text-rose-600 hover:cursor-pointer" />
				</button>
			</div>
		</div>
	);
};

export default TaskItem;
