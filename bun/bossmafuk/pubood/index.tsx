import { createRoot } from 'react-dom/client'
import  Layout  from '../layout'
import '../src/global.css'
import { useStore } from './state'
import { words } from './words'
import { useEffect, useRef } from 'react'

console.log(words);
const pageName = "Homework";

function App() {

	const bears = useStore((state) => state.bears)
	const increasePopulation = useStore((state) => state.increasePopulation)
	const birds = useStore((state) => state.birds)
	const updateBirds = useStore((state) => state.updateBirds);
	const removeAllBears = useStore((state) => state.removeAllBears)


	function resetAll() {
		removeAllBears();
		updateBirds ("None");
	}

	function mix() {
		const randomBirds = words[Math.floor(Math.random() * words.length)];
		increasePopulation();
		updateBirds (randomBirds);
	}

	return (
			<Layout pageName={pageName}>
				<main>
					<h2 className='font-mono font-bold text-2xl'>{bears}</h2>
					<button onClick= {mix} className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'>
						เพิ่มดิ้
					</button>
					<button onClick= {resetAll} className='bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer ml-4'>
						รีเซ็ตดุ้
					</button>
					
				</main>
				<h2 className='font-mono font-bold text-2xl mt-10'>{birds}</h2>
				
				<Seccond />
			</Layout>
		)
}

function useLatestBears(value: number) {
	const ref = useRef<number | null>(null);

	useEffect(() => {
		ref.current = value;
	});

	return ref.current;
}

function useLatestBirds(value: string) {
	const ref = useRef<string | null>(null);

	useEffect(() => {
		ref.current = value;
	});

	return ref.current;
}

function Seccond() {

	const bears = useStore((state) => state.bears)
	const birds = useStore((state) => state.birds)
	const lastestBears = useLatestBears(bears)
	const lastestBirds = useLatestBirds(birds)

	return (
			<main>
				<h2 className='font-mono font-bold text-3xl text-white-500 mt-10'>ข้อมูลล่าสุด : </h2>
				<h2 className='font-mono font-bold text-2xl text-red-500'>{lastestBears}</h2>
				<h2 className='font-mono font-bold text-2xl text-red-500'>{lastestBirds}</h2>
			</main>
	)

}


const root = createRoot(document.getElementById('root')!)
root.render(<App />)