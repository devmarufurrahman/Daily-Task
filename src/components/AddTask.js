const AddTask = () => {
	return (
		<form
			className=" bg-gray-900 p-10 container w-10/12
		 mx-auto flex justify-between">
			<input
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
