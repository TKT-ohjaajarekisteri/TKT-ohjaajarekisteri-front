import React from 'react'
import { shallow } from 'enzyme'
import Course from '../components/admin/Course'


describe.only('<Course />', () => {
  it('renders course details', () => {
    const course = {
      course_id: '2020',
      learningopportunity_id: 'TKT 202020',
      course_name: 'OHTU',
      course_year: 2019,
      periods: [2]
    }

    const setHidden = jest.fn()

    const courseComponent = shallow(<Course course={course} setHidden={setHidden} />)

    const nameDiv = courseComponent.find('.name')

    expect(nameDiv.text()).toContain(course.course_name)
  })
})