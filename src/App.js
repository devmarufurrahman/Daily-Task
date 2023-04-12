import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { createContext, useEffect, useState } from "react";

export const DeleteHandlerContext = createContext();

function App() {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const [editingText, setEditingText] = useState("");
	const [editToggleMOde, setEditToggleMode] = useState(true);

	useEffect(() => {
		// getting data from the server
		fetchingData();
	}, []);

	// fetching data
	const fetchingData = async () => {
		try {
			const res = await fetch("https://daily-task-server.glitch.me/task");
			if (!res.ok) throw new Error("Something went wrong");
			const data = await res.json();
			setTasks(data);
			setLoading(false);
		} catch (error) {
			setError(error.message);
		}
	};

	// delete handler
	const deleteHandler = (id) => {
		// delete data
		deleteData(id);

		// set update task

		setTasks(tasks.filter((task) => id !== task.id));
	};

	const deleteData = async (id) => {
		await fetch(`https://daily-task-server.glitch.me/task/${id}`, {
			method: "DELETE",
			"Content-type": "application/json",
		});
	};

	// edit task item
	const editHandler = (id) => {};
	return (
		<div className="Wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10 ">
			<DeleteHandlerContext.Provider value={deleteHandler}>
				<Header />
				<AddTask tasks={tasks} setTasks={setTasks} />
				<TaskList tasks={tasks} error={error} loading={loading} />
				<Footer />
			</DeleteHandlerContext.Provider>
		</div>
	);
}

export default App;
