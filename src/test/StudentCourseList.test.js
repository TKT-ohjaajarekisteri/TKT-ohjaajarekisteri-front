import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { StudentCourseList } from '../components/student/StudentCourseList'

describe('<StudentCourseList />', () => {
  let courseList, props
  beforeAll(() => {
    props = {
      getStudentCourses: jest.fn(),
      deleteAppliedCourse: jest.fn(),
      notify: jest.fn(),
      id: 1,
      loggedUser: {
        user: {
          user_id: 1,
          token: '...'
        }
      },
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
        <StudentCourseList {...props} />
      </Router>
    )
  })

  afterAll(() => {
    courseList.unMount()
    // console.log(courseList.debug())
  })

  it('renders self', () => {
    let table = courseList.find('.courseList')
    expect(table.length).toBe(1)
  })

  describe('useEffect', () => {
    it('calls getContactInformation and getStudentCourses', () => {
      courseList = mount(
        <Router>
          <StudentCourseList {...props} />
        </Router>
      )
      setTimeout(() => {
        expect(props.getStudentCourses).toHaveBeenCalledTimes(1)
      }, 50)
    })
  })


})