import React from 'react'
import { mount } from 'enzyme'
import { SingleStudent } from '../components/admin/SingleStudent'

describe('<SingleStudent/>', () => {
  let wrapper, props
  beforeAll(() => {
    props = {
      student: {
        email: 'Teppo.Tellervo@helsinki.fi',
        experience: 'Testasin kisätyötä Ohpessa syksyllä 2018',
        first_names: 'Timo *Teppo Tellervo',
        last_name: 'Testaaja',
        no_english: true,
        phone: '0404444444',
        student_id: 2,
        student_number: '012345678'
      },
      getSingleStudent: jest.fn(),
      getSingleStudentCourses: jest.fn(),
      studentId: 2,
      courses: [ {
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
        groups: null,
        hidden: false,
        learningopportunity_id: 'TKT10005',
        periods: [4],
        updatedAt: '2019-04-15T12:13:01.732Z',
        year: 2019
      }
      ]
    }
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders self', () => {
    wrapper = mount( <SingleStudent {...props} />)
    let table = wrapper.find('.singleStudent')
    expect(table.length).toBe(1)
    expect(wrapper.find('.Student').length).toBe(1)
  })


})
