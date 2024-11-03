import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './Testimonials.module.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { testimonialsContent } from '../../../assets/assetsVideos';
import { css } from '@emotion/react';


const Testimonials = () => {
  return (
    <div className={styles.body}>
        <div className={styles.testimonies}>
            <h3>Testimonies.</h3>
            <span>See How SkillUp Made a Difference.</span> <br />
            <small>Disclaimer: These testimonials are fictional and for illustrative purposes only.</small>
        </div>
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
      >
        
            { 
            
            testimonialsContent.map((items, index)=>{
                return(
                    <div key={index} className={styles.sliderDiv}>
                        <SwiperSlide className={styles.testimonialsSwiper}>
                        <p>{items.testimony}</p>
                        <div className={styles.sliderContainer}>
                            <img src={items.img} alt="" />
                            <div className={styles.testimonyAbout}>
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