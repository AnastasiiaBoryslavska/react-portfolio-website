import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper';

// swiper bundle styles 
import 'swiper/swiper-bundle.min.css'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

const data = [
  {
    avatar: AVTR1,
    name: "Sin Chin",
    review: "Lorem ipsum dolor "
  },
  {
    avatar: AVTR2,
    name: "Li Tan",
    review: "sit amet consectetur adipisicing elit."
  },
  {
    avatar: AVTR3,
    name: "Rocky Son",
    review: " dolor sit amet consectetur "
  },
  {
    avatar: AVTR4,
    name: "Kelly Smith",
    review: " amet consectetur adipisicing."
  }
  
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Rewiew from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='client avatar'></img>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials