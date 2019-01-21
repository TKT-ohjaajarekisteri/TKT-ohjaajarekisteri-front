import React from 'react'
import { connect } from 'react-redux'


const CourseList = (props) => (

  <div>
    <h3>Course</h3>
    {/* {props.coursesToShow.map(s =>
      <div key={s.id}>
        {s.course.name}
      </div>
    )} */}
  </div>
)

const mapStateToProps = (state) => {
  const coursesToShow = state.courses
  return {
    coursesToShow
  }
}

export default connect(mapStateToProps)(CourseList)
