import { ButtonPrimary, TaskForm, TaskList } from '../components'
import { supabase } from '../utils/supabase'

const Home = () => {
	const handleClick = async () => {
		await supabase.auth.signOut()
	}

	return (
		<>
			<h1 className='text-7xl font-bold'>INICIO</h1>
			<TaskList />
			<TaskForm />
			<ButtonPrimary onClick={handleClick}>Cerrar Seccion</ButtonPrimary>
		</>
	)
}

export default Home
