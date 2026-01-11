import { createRoot } from 'react-dom/client'

import Login from '../components/login'
// import Homepage from '../components/้Homepage'

import '@public/global.css'

function App() {
  return (<Login />)
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(<App />)
