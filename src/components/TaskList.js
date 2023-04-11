import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
	return (
		<div
			className=" bg-gray-900 p-10 container w-10/12
		 mx-auto flex flex-col gap-3">
			{tasks.map((task) => (
				<TaskItem task={task} key={task.id} />
			))}
		</div>
	);
};

export default TaskList;
