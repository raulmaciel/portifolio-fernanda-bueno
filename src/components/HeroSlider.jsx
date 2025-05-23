import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const imagens = [
  '/src/assets/fernanda1.png',
  '/src/assets/fernanda2.png',
  '/src/assets/fernanda3.png'
]

export default function HeroSlider() {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-[600px] md:w-[700px]"
      >
        {imagens.map((src, i) => (
          <SwiperSlide
            key={i}
            className="bg-white flex justify-center items-center rounded-xl overflow-hidden"
          >
            <img src={src} alt={`Slide ${i}`} className="w-full h-auto object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
