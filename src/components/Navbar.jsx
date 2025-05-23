import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <>
      <header id="navbar" className='fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#0e0e10]/70 backdrop-blur-md border border-gray-700 text-white rounded-xl px-6 py-3 z-50 flex justify-between items-center w-[90%] max-w-5xl shadow-lg'>
        <div className='text-sm sm:text-base font-semibold tracking-wide'><a href="#hero">Fernanda Bueno</a></div>

        <nav className='hidden md:flex gap-6 text-sm'>
          <a href="#services" className='hover:text-red-400 transition-colors'>Serviços</a>
          <a href="#skills" className='hover:text-red-400 transition-colors'>Minhas Habilidades</a>
          <a href="#portfolio" className='hover:text-red-400 transition-colors'>Portifólio</a>
          <a href="#contact" className='hover:text-red-400 transition-colors'>Contato</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuAberto(!menuAberto)}>
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <button className="ml-4 bg-[#1e1e24] px-3 py-1 rounded-md border border-gray-600 text-xs hover:bg-gray-700 transition">ENG 🌐</button>
      </header>

      {menuAberto && (
        <div className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-black/90 backdrop-blur-md rounded-xl py-6 px-4 z-40 space-y-4 text-center text-white">
          <a href="#services" onClick={() => setMenuAberto(false)} className='block'>Serviços</a>
          <a href="#skills" onClick={() => setMenuAberto(false)} className='block'>Minhas Habilidades</a>
          <a href="#portfolio" onClick={() => setMenuAberto(false)} className='block'>Portifólio</a>
          <a href="#contact" onClick={() => setMenuAberto(false)} className='block'>Contato</a>
        </div>
      )}
    </>
  )
}
