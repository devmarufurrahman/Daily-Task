import { useRef, useState } from "react";

const AddTask = () => {
	const [task, setTask] = useState("");

	const inputRef = useRef();

	// add task handle event
	const addTaskHandler = (e) => {
		e.preventDefault();
		// post task into server
		taskPosting(task);

		inputRef.current.blur();
		setTask("");
	};

	// task posting
	const taskPosting = async (text) => {
		const res = await fetch(
			"https://aluminum-delicate-snowshoe.glitch.me/tasks",
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ text }),
			},
		);
	};
	return (
		<form
			className=" bg-gray-900 p-10 container w-10/12
		 mx-auto flex justify-between"
			onSubmit={addTaskHandler}>
			<input
				ref={inputRef}
				value={task}
				onChange={(e) => setTask(e.target.value)}
				required
				type="text"
				placeholder="What things to do?"
				className="bg-transparent outline-none border-b-2 py-2 px-5 border-gray-400 focus:border-teal-500"
			/>
			<button
				type="submit"
				className="bg-teal-900/30 px-5 py-3 border-teal-500 rounded text-teal-500 hover:bg-teal-600 hover:text-gray-900 duration-300">
				Add task
			</button>
		</form>
	);
};

export default AddTask;
