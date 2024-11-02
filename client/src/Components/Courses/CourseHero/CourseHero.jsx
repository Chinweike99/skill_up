import React, { useEffect, useState } from 'react'
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
    <div>
        <section>
            <div>
                <h1>SkillUp Courses .....</h1>
                <span>Explore courses from experienced real world experts..</span>
            </div>

            <div>
                <div>
                    <p>Most popular</p>
                    <p>New</p>
                    <p>Trending</p>
                </div>

                <hr />

                <div>
                    {courseInfo.map((item, index) => {
                        return(
                            <div key={index}>
                                <img src={item.img} alt="" />
                                <div>
                                    <p>{item.title}</p>
                                    <span>{item.tutor}</span>
                                    <div>
                                        <b>4.5</b>
                                        <StarRateIcon />
                                        <StarRateIcon />
                                        <StarRateIcon />
                                        <StarRateIcon />
                                        <StarOutlineIcon />
                                        {item.raters}
                                    </div>
                                    <b>{money}{item.price}</b>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    </div>
  )
}

export default CourseHero