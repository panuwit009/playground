import { createRoot } from 'react-dom/client'

import Homepage from './้Homepage'
// import Homepage from '../components/้Homepage'

import '@public/global.css'

function App() {
  return (<Homepage />)
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(<App />)
