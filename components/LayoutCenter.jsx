const LayoutCenter = ({ children }) => {
	return (
		<div className='w-full h-full flex flex-col justify-center items-center gap-4'>
			{children}
		</div>
	)
}

export default LayoutCenter
