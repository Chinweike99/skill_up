import React from 'react'
import Course from '../Components/Courses/CourseHeader/Course'
import CourseHero from '../Components/Courses/CourseHero/CourseHero'
import FeaturedCourse from '../Components/Courses/FeaturedCourses/FeaturedCourse'
import PopularTopics from '../Components/Courses/Popular/PopularTopics'
import AllCourses from '../Components/Courses/AllCourses/AllCourses'

const Courses = () => {
  return (
    <div>
       <Course />
       <CourseHero />
       <FeaturedCourse />
       <PopularTopics />
       <AllCourses />
    </div>
  )
}

export default Courses