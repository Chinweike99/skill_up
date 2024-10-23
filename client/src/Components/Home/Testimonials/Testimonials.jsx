import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Testimonials.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { testimonialsContent } from '../../../assets/assetsVideos';


const Testimonials = () => {
  return (
    <div className='body'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
            { 
            
            testimonialsContent.map((items, index)=>{
                return(
                    <div>
                        <SwiperSlide>
                        <p>{items.testimony}</p>
                        <div>
                            <img src={items.img} alt="" />
                            <div>
                                <p>{items.name}</p>
                                <span>{items.occupation}</span>
                            </div>
                        </div>
                        </SwiperSlide>
                    </div>
                    
                )
            })
            
            }

        
      </Swiper>
    </div>
  )
}

export default Testimonials