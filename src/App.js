import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
	return (
		<div className="Wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10 ">
			<Header />
			<AddTask />
			<TaskList />
			<Footer />
		</div>
	);
}

export default App;
