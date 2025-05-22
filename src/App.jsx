import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header id="navbar" className='bg-sky-600 text-white'>
        <h1 className='text-2xl'>Fernanda Bueno</h1>
      </header>
      <main>
        <section id="hero" className='h-screen bg-black text-white flex items-center justify-center'>
          <h2 className='text-4xl'>Jornalista</h2>
        </section>
        <section id="services"></section>
        <section id="skills"></section>
        <section id="portfolio"></section>
        <section id="contact"></section>
      </main>
      <footer className="bg-neutral-900 text-white p-4 text-center">
        © 2025 - Todos os direitos reservados
      </footer>
    </>
  )
}

export default App
