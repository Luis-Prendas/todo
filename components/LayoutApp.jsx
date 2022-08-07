const LayoutApp = ({ children }) => {
	return (
		<main className='h-screen bg-slate-900 flex justify-center items-center text-white'>
			<div className='w-full h-full bg-primary flex flex-col justify-start items-center p-4 gap-4 sm:w-[600px] sm:h-[800px] sm:rounded-lg'>
				{children}
			</div>
		</main>
	)
}

export default LayoutApp
