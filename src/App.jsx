import { useState } from 'react'
import './App.css'
import HeroSlider from './components/HeroSlider'
import Navbar from './components/Navbar'
import PortfolioSlider from './components/PortfolioSlider'


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
          className="min-h-screen w-full px-6 md:px-20 py-24 bg-[#111827] text-white font-[Inter] scroll-mt-5"
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

        <section
          id="skills"
          className="min-h-screen w-full px-6 md:px-20 py-24 bg-[#0f172a] text-white font-[Inter] scroll-mt-5"
        >
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Minhas Habilidades
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-300">
                Experiência em múltiplas plataformas, ferramentas e linguagens da comunicação moderna.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left">
              <div className="bg-[#1e293b] p-5 rounded-xl border border-gray-700 hover:border-indigo-400 transition">
                <h3 className="text-lg font-semibold text-indigo-400 mb-1">Redação jornalística</h3>
                <p className="text-gray-300 text-sm">Criação de textos informativos, reportagens e artigos com apuração precisa e linguagem acessível.</p>
              </div>

              <div className="bg-[#1e293b] p-5 rounded-xl border border-gray-700 hover:border-purple-400 transition">
                <h3 className="text-lg font-semibold text-purple-400 mb-1">SEO & Conteúdo Web</h3>
                <p className="text-gray-300 text-sm">Produção otimizada para mecanismos de busca, com foco em engajamento e relevância.</p>
              </div>

              <div className="bg-[#1e293b] p-5 rounded-xl border border-gray-700 hover:border-pink-400 transition">
                <h3 className="text-lg font-semibold text-pink-400 mb-1">Mídias Sociais</h3>
                <p className="text-gray-300 text-sm">Gestão de conteúdo e comunicação estratégica no Instagram, LinkedIn e mais.</p>
              </div>

              <div className="bg-[#1e293b] p-5 rounded-xl border border-gray-700 hover:border-blue-400 transition">
                <h3 className="text-lg font-semibold text-blue-400 mb-1">Edição de vídeo & áudio</h3>
                <p className="text-gray-300 text-sm">Conhecimento em ferramentas como Canva, CapCut e Photoshop para conteúdo multiplataforma.</p>
              </div>

              <div className="bg-[#1e293b] p-5 rounded-xl border border-gray-700 hover:border-teal-400 transition">
                <h3 className="text-lg font-semibold text-teal-400 mb-1">Entrevistas e Apresentação</h3>
                <p className="text-gray-300 text-sm">Boa comunicação oral, empatia e presença de câmera em entrevistas e vídeos institucionais.</p>
              </div>

              <div className="bg-[#1e293b] p-5 rounded-xl border border-gray-700 hover:border-yellow-400 transition">
                <h3 className="text-lg font-semibold text-yellow-400 mb-1">Ética jornalística</h3>
                <p className="text-gray-300 text-sm">Compromisso com a veracidade, responsabilidade e pluralidade de vozes na informação.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="min-h-screen w-full px-6 md:px-20 py-24 bg-[#1a1a1a] text-white font-[Inter] scroll-mt-5"
        >
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfólio
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-300">
                Experiências em campo, reportagens e produções jornalísticas realizadas mim.
              </p>
            </div>

            <PortfolioSlider />
          </div>
        </section>
        <section
          id="contact"
          className="min-h-screen w-full px-6 md:px-20 py-24 bg-[#0f172a] text-white font-[Inter] scroll-mt-5"
        >
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Entre em Contato
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-300">
                Interessado(a) em uma parceria, projeto ou entrevista? Envie sua mensagem e responderei em breve!
              </p>
            </div>

            <form
              className="grid gap-6 text-left"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Mensagem enviada com sucesso!")
              }}
            >
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                required
                className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                required
                className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="mensagem"
                rows="5"
                placeholder="Sua mensagem"
                required
                className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-blue-500/30"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>

      </main>
      <footer className="bg-neutral-900 text-white p-4 text-center">
        © 2025 - Todos os direitos reservados
      </footer>
    </>
  )


}

export default App
