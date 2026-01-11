import { createRoot } from 'react-dom/client'
import "../global.css";

function App() {

	return (
		<main className='bg-gradient-to-br from-gray-500 to-black'>
			<div className="flex items-center justify-center gap-6 min-h-screen">
				<button 
				id="TD" 
				onClick={
					// gotopage(event)
					console.log
				}
				data-btname="TD" 

				className="bg-gradient-to-br from-sky-300 to-sky-700 px-8 py-4 
				rounded-lg font-semibold text-white hover:bg-green-600 
				hover:scale-125 hover:-translate-y-5 transition-all duration-500 ease-in-out">
					TD
				</button>
					
				<button 
				id="PN" 
				onClick={
					// gotopage(event)
					console.log
				}
				data-btname="PN"

				className="bg-red-600 px-8 py-4 rounded-lg font-semibold text-white 
				hover:bg-green-600 hover:scale-125 hover:-translate-y-5 transition-all">
					PN
				</button>
			</div>
			<div className="absolute bottom-6 right-6">
				<button 
				id="BS" 
				onClick={
					// gotopage(event)
					console.log
				}
				data-btname="BS" 
				
				className="bg-yellow-600 px-8 py-4 rounded-lg font-semibold text-white 
				hover:bg-green-600 hover:scale-125 hover:-translate-y-5 transition-all">
					BS
				</button>
			</div>
		</main>
	)
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)