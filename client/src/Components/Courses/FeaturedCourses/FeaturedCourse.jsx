import React from 'react'
import styles from './FeaturedCourse.module.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import { courseImg } from '../../../assetsCourse/course';

const FeaturedCourse = () => {
  return (
    <div className={styles.featuredContainer}>
        <section>
            <div className={styles.course}>
                <h1>Featured Course</h1>
                <span>Many Learners enjoyed this course for it sversatility</span>
            </div>

            <div className={styles.featuredContent}>
                <img src={courseImg.featuredCourse} alt="featured image" />
                <div className={styles.webDev}>
                    <h3>Modern web3 Development</h3>
                    <p>Learn how to code solidity using the new feature. Use the new best practices while avoiding pitfalls</p>

                    <span>By <em>Samuel Johnson</em></span>
                    <p className={styles.updated}><span>updated 2024</span> 6 hours &bull; 58 lectures &bull; All levels</p>
                    <div className={styles.icon}>
                        <span>5.0</span>
                        <div>
                            <StarRateIcon className={styles.starIcon}/>
                            <StarRateIcon className={styles.starIcon}/>
                            <StarRateIcon className={styles.starIcon}/>
                            <StarRateIcon className={styles.starIcon}/>
                            <StarRateIcon className={styles.starIcon}/>
                        </div>
                        (14)
                        <button>New</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FeaturedCourse