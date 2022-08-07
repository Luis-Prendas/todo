import { motion } from 'framer-motion'

const ButtonPrimary = ({ children, onClick, disabled }) => {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={onClick}
			disabled={disabled}
			className='px-6 py-4 bg-slate-900 flex justify-center items-center gap-4 rounded-full text-lg font-semibold'
		>
			{children}
		</motion.button>
	)
}

export default ButtonPrimary
