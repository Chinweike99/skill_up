import React, { useState } from 'react'
import './CourseHero.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { courseInfo } from '../../../assetsCourse/course';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const CourseHero = () => {
    const money = "$";
    const [courseDetail, setDetails] = useState(courseInfo);

    const getCurrent = (category) => {
        setDetails(courseInfo.filter((skill)=>skill.category === category))
    }


  return (
    <div className='courseHeroMain'>
        <section>
            
            <div className='courseHero'>
                <h1>SkillUp Courses .....</h1>
                <h3>Courses to get you started</h3>
                <span>Explore courses from experienced real world experts..</span>
            </div>

            <div>
                <div className='courseHeroSelect'>
                    <p onClick={()=>setDetails(courseInfo)}>Most popular</p>
                    <p onClick={()=>getCurrent("tech")}>Programming</p>
                    <p onClick={()=>getCurrent("vocational")}>Vocational</p>
                    <p onClick={()=>getCurrent("entertainment")}>Entertainment</p>
                </div>

                <hr />

                <div className='courseHeroContent'>
                <Swiper
                modules={[Pagination, Navigation]}
                className='courseSlide'
                breakpoints={{
                    800: { slidesPerView: 4 },
                    640: { slidesPerView: 3 },
                    500: { slidesPerView: 2 },
                    468: { slidesPerView: 1 }
                }}
                spaceBetween={10} slidesPerGroup={1} 
                >
                        {courseDetail.map((item, index) => {
                            return(
                                // <div className='courseHeroSet'>
                                <SwiperSlide >
                                    <div key={index} className='courseContent'>
                                        <div className='courseHeroWidth'>
                                            <div className='courseImg'>
                                                <img src={item.img} alt="" className='img-p'/>
                                            </div>
                                            
                                            <div className='title'>
                                                <p>{item.title}</p>
                                                <span>{item.tutor}</span>
                                                <div className='raters'>
                                                    <b>4.5</b>
                                                    <StarRateIcon className='star'/>
                                                    <StarRateIcon className='star'/>
                                                    <StarRateIcon className='star'/>
                                                    <StarRateIcon className='star'/>
                                                    <StarOutlineIcon />
                                                    ({item.raters})
                                                </div>
                                                <b className='money'>{money} {item.price}</b>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                            )
                        })}
                 </Swiper>
                </div>

            </div>
        </section>

        <div className='courseLearn'>
            <div className='courseExtra'>
                <div><PlayArrowIcon /></div>
                <p>Learn in-demand skills with over 250,000 video courses</p>
            </div>

            <div className='courseExtra'>
                <div><StarRateIcon /></div>
                <p>Choose courses taught by real-world experts</p>
            </div>
            <div className='courseExtra'>
                <div><AllInclusiveIcon /></div>
                <p>Learn at your own pace, with lifetime access on mobile and desktop</p>
            </div>
        </div>
    </div>
  )
}

export default CourseHero