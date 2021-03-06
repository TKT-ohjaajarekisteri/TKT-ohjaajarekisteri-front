import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { CourseApplicationList } from '../components/student/CourseApplicationList'

describe('student/ <CourseApplicationList />', () => {
  let wrapper, props
  beforeAll(() => {
    props = {
      initializeCourseApplication: jest.fn(),
      filter: {
        studyProgramme: '',
        period: '',
        courseName: ''
      },
      setChecked: jest.fn(),
      sendApplication: jest.fn(),
      initializeFilter: jest.fn(),
      getStudentCourseIds: jest.fn(),
      studentCourseIds: [3],
      history: [],
      loggedUser: {
        user: {
          user_id: 1,
          token: '...'
        }
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
        <CourseApplicationList {...props} />
      </Router>
    )
    const table = wrapper.find('.courseApplicationList')
    expect(table.length).toBe(1)
    expect(wrapper.find('Course').length).toBe(3)
  })

  describe('useEffect', () => {
    it('calls initializeCourseApplication()', () => {
      wrapper = mount(
        <Router>
          <CourseApplicationList {...props} />
        </Router>
      )
      setTimeout(() => {
        expect(props.initializeCourseApplication).toHaveBeenCalledTimes(1)
      }, 50)
    })
  })

  describe('Checkbox', () => {
    it('calls setChecked when checked', () => {
      wrapper = mount(
        <Router>
          <CourseApplicationList {...props} />
        </Router>
      )
      const checkbox = wrapper.find('input[type="checkbox"]').filterWhere((item) => {
        return item.prop('name') === 'TKT202020'
      })

      checkbox.simulate('change', { target: { checked: true } })
      expect(props.setChecked).toHaveBeenCalledTimes(1)
    })

    it('displays checked when checked', () => {
      const updatedCourses = props.courses.map(c => c.course_id === 1 ? { ...c, checked: true } : c)
      const updatedProps = { ...props, courses: updatedCourses }
      wrapper = mount(
        <Router>
          <CourseApplicationList {...updatedProps} />
        </Router>
      )

      const checkbox = wrapper.find('input[type="checkbox"]').filterWhere((item) => {
        return item.prop('name') === 'TKT202020'
      })

      expect(checkbox.prop('checked')).toBe(true)
    })
  })

  describe('Apply button', () => {
    it('does not send applications if none are checked', () => {
      wrapper = mount(
        <Router>
          <CourseApplicationList {...props} />
        </Router>
      )
      expect(props.sendApplication).toHaveBeenCalledTimes(0)
      const applyButton = wrapper.find('.buttonApply').first()
      expect(applyButton.length).toBe(1)
      applyButton.simulate('click')
      expect(props.sendApplication).toHaveBeenCalledTimes(0)
    })

    it('sends applications when some are checked', () => {
      const updatedCourses = props.courses.map(c => c.course_id === 1 ? { ...c, checked: true } : c)
      const updatedProps = { ...props, courses: updatedCourses }
      wrapper = mount(
        <Router>
          <CourseApplicationList {...updatedProps} />
        </Router>
      )

      expect(props.sendApplication).toHaveBeenCalledTimes(0)

      const applyButton = wrapper.find('.buttonApply').first()
      expect(applyButton.length).toBe(1)
      applyButton.simulate('click')

      expect(props.sendApplication).toHaveBeenCalledTimes(1)
    })

    it('only renders courses matching study programme filter', () => {
      let updatedProps = { ...props, filter: { ...props.filter, studyProgramme: 'CSM' } }
      wrapper = mount(
        <Router>
          <CourseApplicationList {...updatedProps} />
        </Router>
      )
      let table = wrapper.find('.courseApplicationList')
      expect(table.length).toBe(1)
      expect(wrapper.find('Course').length).toBe(1)
    })

    it('only renders courses matching period filter', () => {
      let updatedProps = { ...props, filter: { ...props.filter, period: '2' } }
      wrapper = mount(
        <Router>
          <CourseApplicationList {...updatedProps} />
        </Router>
      )
      let table = wrapper.find('.courseApplicationList')
      expect(table.length).toBe(1)
      expect(wrapper.find('Course').length).toBe(2)
    })

    it('only renders courses matching filter', () => {
      let updatedProps = { ...props, filter: { ...props.filter, studyProgramme: 'CSM', period: '2' } }
      wrapper = mount(
        <Router>
          <CourseApplicationList {...updatedProps} />
        </Router>
      )
      let table = wrapper.find('.courseApplicationList')
      expect(table.length).toBe(1)
      expect(wrapper.find('Course').length).toBe(0)
    })

    it('when rendering course, it is recognized if student has applied', () => {
      wrapper = mount(
        <Router>
          <CourseApplicationList {...props} />
        </Router>
      )
      let table = wrapper.find('.grey')
      let table2 = wrapper.find('.notGrey')
      expect(table.length).toBe(1)
      expect(table2.length).toBe(2)
      expect(wrapper.find('.grey').length).toBe(1)
      expect(wrapper.find('.notGrey').length).toBe(2)
    })

  })
})
