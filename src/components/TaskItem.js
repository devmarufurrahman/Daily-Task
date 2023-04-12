import { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { DeleteHandlerContext } from "../App";

const TaskItem = ({ task }) => {
	const deleteHandler = useContext(DeleteHandlerContext);

	
	return (
		<div className="task-item flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-r hover:from-teal-800 hover:to-gray-800 group">
			<div className="task-item-left flex gap-2">
				<span>
					<input type="checkbox" className="accent-teal-500 " />
				</span>
				<p className="group-hover:text-teal-400">{task.text}</p>
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
