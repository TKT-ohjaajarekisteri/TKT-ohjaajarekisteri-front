import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { ContactDetailsUpdateForm } from '../components/student/ContactDetailsUpdateForm'

describe('CourseDetailsUpdateForm', () => {
  let wrapper, props
  beforeEach(() => {
    props = {
      updateLoggedUser: jest.fn(),
      getContactInformation: jest.fn(),
      getStudentCourses: jest.fn(),
      deleteAppliedCourse: jest.fn(),
      notify: jest.fn(),
      id: 1,
      defaultInput: {
        nickname: 'nickname',
        phone: '+358 000 555',
        email: 'example@mail.com'
      },
      loggedUser: {
        user: {
          user_id: 1,
          token: '...'
        }
      },
      courses: [
        {
          course_id: 1,
          learningopportunity_id: 'TKT 202020',
          name: 'OHTU',
          year: 2019,
          period: 2,
          checked: false
        },
        {
          course_id: 2,
          learningopportunity_id: 'TKT 202111',
          course_name: 'OHTU2',
          year: 2042,
          period: 2,
          checked: false
        },
        {
          course_id: 3,
          learningopportunity_id: 'TKT 202122',
          course_name: 'OHTU3',
          year: 2042,
          period: 3,
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
        <ContactDetailsUpdateForm {...props} />
      </Router>
    )
    const form = wrapper.find('.contactDetailsUpdateForm')
    expect(form.length).toBe(1)

    const list = wrapper.find('.courseList')
    expect(list.length).toBe(1)

  })

  describe('useEffect', () => {
    it('calls getContactInformation and getStudentCourses', () => {
      wrapper = mount(
        <Router>
          <ContactDetailsUpdateForm {...props} />
        </Router>
      )
      setTimeout(() => {
        expect(props.getContactInformation).toHaveBeenCalledTimes(1)
      }, 50)
      setTimeout(() => {
        expect(props.getStudentCourses).toHaveBeenCalledTimes(1)
      }, 50)
    })
  })

  //Todo: test send button 

})
