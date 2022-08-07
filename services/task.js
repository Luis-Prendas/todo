import { supabase } from '../utils/supabase'

export const getTasks = async () => {
	const { id } = supabase.auth.user()
	const {data} = await supabase.from('task').select().eq('userId', id)
	return data
}
