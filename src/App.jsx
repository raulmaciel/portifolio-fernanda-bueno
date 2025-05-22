import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header id="navbar" className='fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#0e0e10]/70 backdrop-blur-md border border-gray-700 text-white rounded-xl px-6 py-3 z-50 flex justify-between items-center w-[90%] max-w-5xl shadow-lg'>
        <div className='text-sm sm:text-base font-semibold tracking-wide'>Fernanda Bueno</div>
        <nav className='hidden md:flex gap-6 text-sm'>
          <a href="#services" className='hover:text-red-400 transition-colors'>Serviços</a> 
          <a href="#skills" className='hover:text-red-400 transition-colors'>Skills</a>
          <a href="#portfolio" className='hover:text-red-400 transition-colors'>Portifólio</a>
          <a href="#contact" className='hover:text-red-400 transition-colors'>Contato</a>
        </nav>

        <button className="ml-4 bg-[#1e1e24] px-3 py-1 rounded-md border border-gray-600 text-xs hover:bg-gray-700 transition">ENG 🌐</button>
      </header>

      <main className='w-full'>
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
