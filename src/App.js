import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		// getting data from the server
		fetchingData();
	}, []);

	// fetching data
	const fetchingData = async () => {
		try {
			const res = await fetch(
				"https://aluminum-delicate-snowshoe.glitch.me/tasks",
			);
			if (!res.ok) throw new Error("Something went wrong");
			const data = await res.json();
			setTasks(data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="Wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10 ">
			<Header />
			<AddTask />
			<TaskList tasks={tasks} />
			<Footer />
		</div>
	);
}

export default App;
