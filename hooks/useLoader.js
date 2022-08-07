import { useState } from 'react'

const useLoader = () => {
	const [loader, setLoader] = useState(false)

	return { loader, setLoader }
}

export default useLoader
