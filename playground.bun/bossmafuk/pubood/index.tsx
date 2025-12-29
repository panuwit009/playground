import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import  Layout  from '../layout'
import '../src/global.css'

const pageName = "Homework";
function App() {
	const [count, setCount] = useState(0)
	const increase = () => setCount((c) => c + 50)

	return (
			<Layout pageName={pageName}>
			<main>
				<h2 className='font-mono font-bold text-2xl'>{count}</h2>
				<button onClick={increase} className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'>
					เพิ่มดิ้
				</button>
			</main>
			</Layout>
		)
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)