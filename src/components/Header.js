import { FcTodoList } from "react-icons/fc";

const Header = () => {
	return (
		<header
			className="header bg-gray-900 p-10 container 
		 mx-auto border-b border-dotted border-teal-800 rounded-tl-xl rounded-tr-lg ">
			<h2 className="uppercase font-semibold text-teal-500 tracking-wider flex gap-2 justify-center items-center md:justify-start lg:justify-start">
				<span>
					<FcTodoList />
				</span>
				<span>Daily Task</span>
			</h2>
		</header>
	);
};

export default Header;
