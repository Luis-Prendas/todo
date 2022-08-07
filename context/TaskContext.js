import { createContext, useState } from 'react'
import { supabase } from '../utils/supabase'
import { useRouter } from 'next/router'

export const TaskContext = createContext()

export const TaskContextProvider = ({ children }) => {
	const [tasks, setTasks] = useState([])
	const router = useRouter()

	const getTasks = async () => {
		if (!supabase.auth.user()) {
			router.push('/login')
			return
		}

		const { id } = supabase.auth.user()
		const { error, data } = await supabase
			.from('task')
			.select()
			.eq('userId', id)
			.order('id', { ascending: true })

		if (error) throw error

		setTasks(data)
	}

	const createTask = async task => {
		const { id } = supabase.auth.user()
		const { error, data } = await supabase
			.from('task')
			.insert({ name: task, userId: id })

		if (error) throw error

		setTasks([...tasks, ...data])
	}

	const deleteTask = async taskId => {
		const { id } = supabase.auth.user()
		const { error } = await supabase
			.from('task')
			.delete()
			.eq('userId', id)
			.eq('id', taskId)

		if (error) throw error

		setTasks(tasks.filter(task => task.id !== taskId))
	}

	return (
		<TaskContext.Provider value={{ tasks, getTasks, createTask, deleteTask }}>
			{children}
		</TaskContext.Provider>
	)
}
