import React from 'react'
import { shallow } from 'enzyme'
import Course from '../components/course/Course'

describe.only('<Course />', () => {
  it('renders course name', () => {
    const course = {
      course_name: 'OHTU'
    }

    const courseComponent = shallow(<Course course={course} />)
    const contentDiv = courseComponent.find('.name')
    console.log(contentDiv)

    expect(contentDiv.text()).toContain(course.course_name)
  })
})