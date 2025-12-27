import { createRoot } from 'react-dom/client';
import { Login } from '../components/login';

import '@public/global.css'

function App() {

	return (
		<main className='min-h-dvh w-dvw flex justify-end'>
			<Login />			  
		</main>
	)
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)