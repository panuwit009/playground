import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [result, setResult] = useState('')


    function login() {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then(res => res.json())
            .then(data => {
                setResult(data.message)
            })
    }

    return (
        <>
            <h2>Login</h2>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" /><br /><br />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" /><br /><br />
                <button onClick={login}>Logins</button>
            <p>{result}</p>

            
        </>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
