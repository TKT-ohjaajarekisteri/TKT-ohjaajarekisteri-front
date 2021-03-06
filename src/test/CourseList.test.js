import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { CourseList } from '../components/admin/CourseList'

describe('<CourseList />', () => {
  let wrapper, props
  beforeEach(() => {
    props = {
      initializeFilter: jest.fn(),
      initializeCourses: jest.fn(),

      filter: {
        studyProgramme: '',
        period: '',
        courseName: ''
      },
      courses: [
        {
          course_id: 1,
          learningopportunity_id: 'TKT202020',
          course_name: 'OHTU',
          year: 2019,
          periods: [2],
          checked: false
        },
        {
          course_id: 2,
          learningopportunity_id: 'TKT202111',
          course_name: 'OHTU2',
          year: 2042,
          periods: [2],
          checked: false
        },
        {
          course_id: 3,
          learningopportunity_id: 'CSM202122',
          course_name: 'OHTU3',
          year: 2042,
          periods: [3],
          checked: false
        }
      ]
    }
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders self', () => {
    wrapper = mount(
      <Router>
        <CourseList {...props} />
      </Router>
    )

    let table = wrapper.find('.courseList').first()

    expect(table.length).toBe(1)
    expect(wrapper.find('Course').length).toBe(3)
  })

  it('only renders courses matching study programme filter', () => {
    let updatedProps = { ...props, filter: { ...props.filter, studyProgramme: 'CSM' } }
    wrapper = mount(
      <Router>
        <CourseList {...updatedProps} />
      </Router>
    )
    let table = wrapper.find('.courseList').first()
    expect(table.length).toBe(1)
    expect(wrapper.find('Course').length).toBe(1)
  })

  it('only renders courses matching period filter', () => {
    let updatedProps = { ...props, filter: { ...props.filter, period: '3' } }
    wrapper = mount(
      <Router>
        <CourseList {...updatedProps} />
      </Router>
    )
    let table = wrapper.find('.courseList').first()
    expect(table.length).toBe(1)
    expect(wrapper.find('Course').length).toBe(1)
  })

  it('only renders courses matching filter', () => {
    let updatedProps = { ...props, filter: { ...props.filter, studyProgramme: 'CSM', period: '2' } }
    wrapper = mount(
      <Router>
        <CourseList {...updatedProps} />
      </Router>
    )
    let table = wrapper.find('.courseList').first()
    expect(table.length).toBe(1)
    expect(wrapper.find('Course').length).toBe(0)
  })
})