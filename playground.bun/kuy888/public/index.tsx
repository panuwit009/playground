import { createRoot } from 'react-dom/client';
import { Counter } from '../components/counter';

import '@public/global.css'

function App() {
	return (
		<main className='bg-blue-50 h-dvh w-dvw flex justify-center items-center'>
			<Counter />
		</main>
	)
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)