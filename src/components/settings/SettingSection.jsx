import { motion } from "framer-motion";

const SettingSection = ({ icon: Icon, title, children }) => {
	return (
		<motion.div
			className='bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			style={{	backgroundColor: "var(--body-color)", borderColor: "var(--shadow-color)", color: "var(--text-color)", }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='flex items-center mb-4'>
				<Icon className='text-indigo-400 mr-4' size='24' />
				<h2 className='text-xl font-semibold' 	style={{ color: "var(--text-color)", }}>{title}</h2>
			</div>
			{children}
		</motion.div>
	);
};
export default SettingSection;
