import React from 'react'
import { shallow } from 'enzyme'
import SingleStudentCourse from '../components/admin/SingleStudentCourse'

describe('<SingleStudentCourse/>', () => {
  it('renders course details', () => {

    const course = {
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
      period: 4,
      updatedAt: '2019-04-15T12:13:01.732Z',
      year: 2019
    }

    const courseComponent = shallow(<SingleStudentCourse course={course} />)

    const nameDiv = courseComponent.find('.name')

    expect(nameDiv.text()).toContain(course.course_name)
  })
})