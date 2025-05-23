import { useState } from 'react'
import './App.css'
import HeroSlider from './components/HeroSlider'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <main className='w-full'>

        <section
          id="hero"
          className="relative min-h-screen w-full text-white font-[Inter] flex items-center px-6 md:px-20 py-20 orbs"
          style={{
            background: 'linear-gradient(-45deg, #1f2937, #111827,#12294a, #1f2937)',
            backgroundSize: '400% 400%',
            animation: 'gradientBackground 15s ease infinite',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">

            <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-200 via-slate-300 to-zinc-400 bg-clip-text text-transparent leading-tight break-words">
                <div className="inline-block text-left">
                  <div className="text-left">JORNALISTA</div>
                  <div className="text-left text-2xl md:text-2xl lg:text-4xl">MULTIPLATAFORMA</div>
                </div>
              </h1>

              <p className="text-base md:text-lg leading-relaxed">
                Eu sou Fernanda — <span className="text-blue-400 font-semibold">jornalista</span> com foco em ética,
                credibilidade e impacto na era digital.
              </p>

              <button className="px-6 py-2 border-2 border-blue-600 rounded-full text-white hover:bg-blue-600 transition-all font-medium shadow-md hover:shadow-blue-600/40">
                VER PORTFÓLIO
              </button>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <HeroSlider />
            </div>
          </div>
        </section>


        <section
          id="services"
          className="w-full px-6 md:px-20 py-24 bg-[#111827] text-white font-[Inter]"
        >
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Meus Serviços
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-300">
                Como jornalista multiplataforma, entrego conteúdo com qualidade, ética e estratégia.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-[#1f2937] p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-pink-500/20 transition">
                <h3 className="text-xl font-semibold mb-2 text-pink-400">Reportagens</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Produção de matérias exclusivas, cobertura de eventos e entrevistas com apuração ética e ágil.
                </p>
              </div>

              <div className="bg-[#1f2937] p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-purple-500/20 transition">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Conteúdo Digital</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Criação de conteúdo estratégico para redes sociais, sites e blogs com foco em engajamento.
                </p>
              </div>

              <div className="bg-[#1f2937] p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-red-500/20 transition">
                <h3 className="text-xl font-semibold mb-2 text-red-400">Assessoria de Imprensa</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Gestão de imagem e relacionamento com a mídia para empresas, artistas e instituições.
                </p>
              </div>
            </div>
          </div>
        </section>

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
