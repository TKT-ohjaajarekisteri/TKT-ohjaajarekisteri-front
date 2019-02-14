import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme'
import { CourseList } from '../components/course/CourseList'

describe('<CourseList />', () => {
  let courseList
  beforeAll(() => {
    let props = {
      courses: [
        {
          course_id: 'TKT 202020',
          course_name: 'OHTU',
          course_year: 2019,
          course_period: 2
        },
        {
          course_id: 'TKT 202111',
          course_name: 'OHTU2',
          course_year: 2042,
          course_period: 2
        }
      ]
    }

    courseList = mount(
      <Router>
        <CourseList {...props} />
      </Router>
    )
  })

  afterAll(() => {
    courseList.unMount()
  })

  it('renders self', () => {
    let table = courseList.find('.courseList')
    expect(table.length).toBe(1)
    expect(courseList.find('Course').length).toBe(2)
  })
})