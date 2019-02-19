import React from 'react'
import { mount } from 'enzyme'
import { SingleCourse } from '../components/admin/SingleCourse'

describe('<SingleCourse />', () => {
  let singleCourse
  beforeAll(() => {
    let props = {
      applicants: [
        {
          student_id: 1,
          student_number: 123,
          first_name: 'Xerkko',
          last_name: 'Opiskelija',
          nickname: 'Xerkkis',
          phone: '+35844556677',
          email: 'arttis@ottis.fi'
        },
        {
          student_id: 2,
          student_number: 234,
          first_name: 'Oiva',
          last_name: 'Opiskelija',
          nickname: 'Oivis',
          phone: '+3584477777',
          email: 'oiva@ottis.fi'
        }
      ],
      course: {
        course_id: 2,
        learningopportunity_id: 'TKT 202020',
        course_name: 'OHTU',
        course_year: 2019,
        course_period: 2
      },
      courseId: 2
    }

    singleCourse = mount(<SingleCourse {...props} />)
  })

  afterAll(() => {
    singleCourse.unMount()
  })

  it('renders self', () => {
    let table = singleCourse.find('.courseHeader')
    expect(table.length).toBe(1)
    expect(singleCourse.find('Student').length).toBe(2)
  })
})