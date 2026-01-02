import { createRoot } from 'react-dom/client'
import { useStore } from "@/src/state/global";

function App() {
    const count = useStore(s => s.count);
	const inc = useStore(s => s.inc);

	return (
		<main>
			<h2>{count}</h2>
			<button onClick={inc}>
				Increase
			</button>
		</main>
	)
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)