import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskCard = ({ task }) => {
  const {deleteTask} = useContext(TaskContext)

	const handleDelete = () => {
    deleteTask(task.id)
	}

	return (
		<article
			key={task.id}
			className='flex w-full justify-between items-center text-lg font-semibold p-2 rounded-lg hover:bg-slate-300'
		>
			<p className='flex gap-2'>
				<span className='justify-center items-center text-slate-500'>
					Tarea:
				</span>
				{task.name}
			</p>
			<div>
				<button onClick={handleDelete}>Eliminar</button>
			</div>
		</article>
	)
}

export default TaskCard
