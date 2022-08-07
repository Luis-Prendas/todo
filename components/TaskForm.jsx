import { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
import useLoader from '../hooks/useLoader'
import ButtonPrimary from './ButtonPrimary'

const TaskForm = () => {
	const [task, setTask] = useState('')
	const { loader, setLoader } = useLoader()
	const { createTask } = useContext(TaskContext)

	const handleChange = event => {
		setTask(event.target.value)
	}

	const handleSubmit = async event => {
		event.preventDefault()
		setLoader(true)
		createTask(task)
		setTask('')
		setLoader(false)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col justify-center items-center gap-4 w-full max-w-[400px]'
		>
			<input
				type='text'
				placeholder='Tarea'
				className='px-4 py-2 rounded-lg w-full focus:outline-slate-300 text-slate-900'
				onChange={handleChange}
				value={task}
				required
			/>
			<ButtonPrimary disabled={loader}>
				{loader ? 'Cargando...' : 'Agregar Tarea'}
			</ButtonPrimary>
		</form>
	)
}

export default TaskForm
