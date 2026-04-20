import { useState } from "react";
import styles from "./Cards.module.css"
export function Cards() {
  const [courses, setCourses] = useState([
    { id: 1, title: "ReactJs", enrolled: false, liked: false },
    { id: 2, title: "JavaScript", enrolled: false, liked: false },
    { id: 3, title: "TypeScript", enrolled: false, liked: false },
    { id: 4, title: "NodeJs", enrolled: false, liked: false },
    { id: 5, title: "MongoDB", enrolled: false, liked: false },
  ])
  const toggleLike = (id) => {
    setCourses(prev => prev.map(
      course => course.id === id ? { ...course, liked: !course.liked } : course
    ))
  }

  const handleEnroll = (id) => {
    setCourses(prev => prev.map(
      course => course.id === id ? { ...course, enrolled: true } : course
    ))
  }



  return (
    <div className={styles.head}>
      {
        courses.map(course => (
          <div className={styles.card} key={course.id}>
            {/* Title code here */}
            <h1>{course.title}</h1>

            <div className={styles.bttn}>
              {/* Toggle like code here */}
              <button className={styles.btn} onClick={() => { toggleLike(course.id) }}>{course.liked ? "❤️ Liked" : "🤍 Like"}</button>

              {/* Enroll code here */}
              <button className={styles.btn1} onClick={() => { handleEnroll(course.id) }} disabled={course.enrolled}>{course.enrolled ? "Enrolled" : "Enroll"}</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}