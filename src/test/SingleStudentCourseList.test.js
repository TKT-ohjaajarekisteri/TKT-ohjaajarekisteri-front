import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { SingleStudentCourseList } from '../components/admin/SingleStudentCourseList'

describe('<SingleStudentCourseList />', () => {
  let courseList, props
  beforeAll(() => {
    props = {
      courses: [
        {
          Application: {
            groups: 0,
            accepted: false,
            hidden: false,
            createdAt: '2019-04-22T07:09:48.359Z',
            updatedAt: '2019-04-22T07:09:48.359Z'
          },
          course_id: 162,
          course_name: 'Tietokoneen toiminta',
          createdAt: '2019-04-15T12:13:01.732Z',
          periods: [4],
          groups: null,
          hidden: false
        },
        {
          Application: {
            groups: 0,
            accepted: false,
            hidden: false,
            createdAt: '2019-04-22T07:09:48.359Z',
            updatedAt: '2019-04-22T07:09:48.359Z'
          },
          course_id: 174,
          course_name: 'Ohjelmistotekniikka',
          createdAt: '2019-04-15T12:13:01.732Z',
          periods: [4],
          groups: null,
          hidden: false
        },
        {
          Application: {
            groups: 0,
            accepted: false,
            hidden: false,
            createdAt: '2019-04-22T07:09:48.359Z',
            updatedAt: '2019-04-22T07:09:48.359Z'
          },
          course_id: 189,
          course_name: 'Aineopintojen harjoitustyö: Tietorakenteet ja algoritmit (periodi IV)',
          createdAt: '2019-04-15T12:13:01.732Z',
          periods: [4],
          groups: null,
          hidden: false
        }
      ]
    }

    courseList = mount(
      <Router>
        <SingleStudentCourseList {...props} />
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

})