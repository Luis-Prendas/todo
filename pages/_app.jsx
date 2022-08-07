import Head from 'next/head'
import { useEffect } from 'react'
import { LayoutApp } from '../components/'
import { TaskContextProvider } from '../context/TaskContext'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { supabase } from '../utils/supabase'

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'SIGNED_IN') router.push('/')
			if (event === 'SIGNED_OUT') router.push('/login')
			if (event === 'TOKEN_REFRESHED') console.log('TOKEN_REFRESHED', session)
		})
	}, [])

	return (
		<>
			<Head>
				<title>SupaBase App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
				<TaskContextProvider>
					<LayoutApp>
						<Component {...pageProps} />
					</LayoutApp>
				</TaskContextProvider>
		</>
	)
}

export default MyApp
