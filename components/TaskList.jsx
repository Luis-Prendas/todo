import { useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskCard from './TaskCard'

const TaskList = () => {
	const { tasks, getTasks } = useContext(TaskContext)

	useEffect(() => {
		getTasks()
	}, [])

	return (
		<section className='w-full p-4 flex flex-col bg-slate-100 text-slate-900 rounded-lg'>
			{tasks.length ? (
				tasks.map(task => <TaskCard key={task.id} task={task} />)
			) : (
				<div className='w-full flex justify-center'>
					<p>No tienes tareas aun.</p>
				</div>
			)}
		</section>
	)
}

export default TaskList
