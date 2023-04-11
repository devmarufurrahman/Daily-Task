import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";

const TaskItem = () => {
	return (
		<div className="task-item flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-r hover:from-teal-800 hover:to-gray-800 group">
			<div className="task-item-left flex gap-2">
				<span>
					<input type="checkbox" className="accent-teal-500 " />
				</span>
				<p className="group-hover:text-teal-400">learn item</p>
			</div>
			<div className="task-item-right flex gap-2">
				<span>
					<FiEdit className="hover:text-teal-600 hover:cursor-pointer" />
				</span>
				<span>
					<FiTrash className="hover:text-rose-600 hover:cursor-pointer" />
				</span>
			</div>
		</div>
	);
};

export default TaskItem;
