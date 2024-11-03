import React from 'react'
import styles from './Popular.module.css'
import { popularcourse } from '../../../assetsCourse/course'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const PopularTopics = () => {
  return (
    <section>
        <div className={styles.coaches}>
            <h1>Popular Coaches</h1>
            <span className={styles.coachSpan}>These coaches are highly rated by students like you ..</span>

            <Swiper
            modules={[Pagination, Navigation]}
            navigation={true}
            breakpoints={{
                800: { slidesPerView: 4 },
                640: { slidesPerView: 3 },
                500: { slidesPerView: 2 },
                468: { slidesPerView: 1 }
            }}
            spaceBetween={10} slidesPerGroup={1} loop={true}
            >
                <div className={styles.coachContainer}>
                    {
                        popularcourse.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className={styles.swiper}>
                                    <div className={styles.popularContent}>
                                        <img src={item.img} alt="" />
                                        <div>
                                            <h3>{item.name}</h3>
                                            <span>{item.courseName}</span>
                                            <span>{item.rating} <StarOutlineIcon className={styles.colorIcon}/>  instructor rating</span>
                                            <span>{item.noStudents} students</span>
                                            <span>{item.noCourses} courses</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </div>
            </Swiper>
        </div>
    </section>
  )
}

export default PopularTopics