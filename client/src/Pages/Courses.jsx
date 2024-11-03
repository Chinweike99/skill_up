import React from 'react'
import Course from '../Components/Courses/CourseHeader/Course'
import CourseHero from '../Components/Courses/CourseHero/CourseHero'
import FeaturedCourse from '../Components/Courses/FeaturedCourses/FeaturedCourse'

const Courses = () => {
  return (
    <div>
       <Course />
       <CourseHero />
       <FeaturedCourse />
    </div>
  )
}

export default Courses