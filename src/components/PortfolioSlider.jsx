import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const portfolioItems = [
  {
    title: 'Cultivo de Bonsai em Taubaté',
    image: 'portifolio/bonsai.png',
    link: 'https://youtu.be/CHdlhcFeBEY?si=YxVxEizGZFUL5NMD',
  },
  {
    title: 'Como fazer Kokedamas',
    image: 'portifolio/kokedama.jpg',
    link: 'https://youtu.be/lgIw6zhXhns',
  },
  {
    title: 'Artesã de Taubaté produz joias afetivas',
    image: 'portifolio/joias.jpg',
    link: 'https://youtu.be/3KCuHbIvmCg',
  },
  {
    title: 'Cerimônia de posse em Taubaté 2025',
    image: 'portifolio/posse.jpg',
    link: 'https://youtu.be/Z3ltrO4Ndts',
  },
]

export default function PortfolioSlider() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="pb-10"
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-3 font-semibold text-lg backdrop-blur-sm">
                  {item.title}
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
