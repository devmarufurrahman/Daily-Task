const Footer = () => {
	return (
		<footer
			className="header bg-gray-900 p-10 container w-10/12
		 mx-auto border-t border-dotted border-teal-800 rounded-bl-xl rounded-br-lg">
			<p className="text-center text-sm text-teal-600">
				&copy; {new Date().getFullYear()} Daily Task. All right reserved by
				Maruf.
			</p>
		</footer>
	);
};

export default Footer;
