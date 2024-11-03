import React from 'react'
import styles from './AllCourses.module.css'
import ErrorIcon from '@mui/icons-material/Error';
import { allCourses } from '../../../assetsCourse/course';
import StarRateIcon from '@mui/icons-material/StarRate'

const AllCourses = () => {

    let money = "$";
  return (
    <section>
        <div className={styles.allCourses}>
            <h1>All SkillUp Courses ..</h1>
            <div className={styles.error}>
                <ErrorIcon />
                <h3>
                    Not sure? All Courses have 30-day money-back guarantee
                </h3>
            </div>

            <div className={styles.allContainer}>
                {
                    allCourses.map((course, index) => {
                        return(
                            <div className={styles.allContent}>
                                <img src={course.image} alt="course thumbnail" />
                                <div className={styles.divv}>
                                    <p>{course.title}</p>
                                    <span>{course.aboutCourse}</span>
                                    <span>{course.tutor}</span>
                                    <div className={styles.rates}>
                                        <span>{course.rating}</span>
                                        <div className={styles.rateIcon}>
                                            <StarRateIcon  className={styles.icon}/>
                                            <StarRateIcon className={styles.icon}/>
                                            <StarRateIcon className={styles.icon}/>
                                            <StarRateIcon className={styles.icon}/>
                                            <StarRateIcon className={styles.icon}/>
                                        </div>
                                        <span>({course.noRaters})</span>
                                    </div>
                                    <span>{course.hours} total hours &bull; {course.lectures} lectures &bull;  {course.levels}</span>

                                    <p className={styles.bestSeller}>{course.seller}</p>
                                </div>
                                <p className={styles.money}>{money}{course.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default AllCourses