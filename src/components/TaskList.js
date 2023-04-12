import TaskItem from "./TaskItem";

const TaskList = ({
	tasks,
	error,
	loading,
	handleEditSubmit,
	editingText,
	setEditingText,
}) => {
	return (
		<div
			className=" bg-gray-900 p-10 container 
		 mx-auto flex flex-col gap-3">
			{loading ? (
				<p className="text-center">{error ? error : "Loading......"}</p>
			) : (
				tasks.length === 0 && <p className="text-center">'No task to show'</p>
			)}

			{tasks.map((task) => (
				<TaskItem
					task={task}
					key={task.id}
					handleEditSubmit={handleEditSubmit}
					editingText={editingText}
					setEditingText={setEditingText}
				/>
			))}
		</div>
	);
};

export default TaskList;
