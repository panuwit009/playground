import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0)
	const increase = () => setCount((c) => c + 1)
    return (
        <div className=''>  
            <h2 className='bg-red-100 text-6xl'>{count} ควยยะเด้kjgkjkjhkjกดเกดเกดเกดเกพดยยๆๆๆ</h2>
            <button
                onClick={increase}
                className='bg-green-100 text-4xl p-4 border-1 rounded-lg cursor-pointer
                hover:scale-95 transition active:scale-90'
            >
                Increase
            </button>
        </div>
    );
}