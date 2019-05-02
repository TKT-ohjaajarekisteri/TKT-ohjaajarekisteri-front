import React from 'react'
import SingleStudentCourse from './SingleStudentCourse'
import { Table } from 'react-bootstrap'

export const SingleStudentCourseList = ({ courses }) => {


  return (
    <div className="courseList">
      <h2>Student history</h2>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Year</th>
            <th>Starting period</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {courses
            .sort((a, b) => { return b.Application.accepted - a.Application.accepted  })
            .map(course =>
              <SingleStudentCourse course={course} key={course.course_id} />
            )}
        </tbody>
      </Table>
    </div>
  )
}

export default SingleStudentCourseList
