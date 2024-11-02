import React, { useEffect, useState } from 'react'
import './CourseHero.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { courseInfo } from '../../../assetsCourse/course';

const CourseHero = () => {
    const money = "$";
    const [courseDetail, setDetails] = useState(courseInfo);


    useEffect((d)=>{
        setDetails(d)
    }, [])
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
                    <p>Most popular</p>
                    <p>New</p>
                    <p>Trending</p>
                </div>

                <hr />

                <div className='courseHeroContent'>
                    {courseInfo.map((item, index) => {
                        return(
                            // <div className='courseHeroSet'>
                                <div key={index} className='courseContent'>
                                    <div className='courseHeroWidth'>
                                        <img src={item.img} alt="" />
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
                            // {/* </div> */}
                        )
                    })}
                    <KeyboardArrowRightIcon />
                </div>

            </div>
        </section>
    </div>
  )
}

export default CourseHero