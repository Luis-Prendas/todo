import { useEffect, useState } from 'react'
import { ButtonPrimary, LayoutCenter } from '../components'
import SvgMail from '../components/icons/SvgMail'
import { supabase } from '../utils/supabase'
import { useRouter } from 'next/router'

const Login = () => {
	const [mail, setMail] = useState('')

	const handleChange = event => {
		setMail(event.target.value)
	}

	const handleSubmit = async event => {
		event.preventDefault()
		try {
			await supabase.auth.signIn({ email: mail })
			setMail('')
		} catch (error) {
			console.error(error)
		}
	}

	const router = useRouter()

	useEffect(() => {
		supabase.auth.user() && router.replace('/')
	}, [])

	return (
		<LayoutCenter>
			<h1 className='text-9xl font-bold'>Pr.</h1>
			<form
				className='flex flex-col justify-center items-center gap-4 w-full max-w-[400px]'
				onSubmit={handleSubmit}
			>
				<input
					type='email'
					className='px-4 py-2 rounded-lg w-full focus:outline-slate-300 text-slate-900'
					placeholder='Tu_Correo@Dominio.com'
					value={mail}
					onChange={handleChange}
					required
				/>
				<ButtonPrimary>
					<SvgMail fill='white' width='28' height='28' />
					Inicia secion
				</ButtonPrimary>
			</form>
		</LayoutCenter>
	)
}

export default Login
