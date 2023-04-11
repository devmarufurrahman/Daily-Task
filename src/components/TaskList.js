import TaskItem from "./TaskItem";

const TaskList = () => {
	return (
		<div
			className=" bg-gray-900 p-10 container w-10/12
		 mx-auto flex flex-col gap-3">
			<TaskItem />
			<TaskItem />
		</div>
	);
};

export default TaskList;
