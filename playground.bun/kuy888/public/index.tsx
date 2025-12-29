import { createRoot } from 'react-dom/client';
import { Login } from '../components/login';

import '@public/global.css'

function App() {

	return (
		<main className='bg-blue-50 h-dvh w-dvw flex justify-center items-center'>
			<Login />
			
		</main>
	)
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)