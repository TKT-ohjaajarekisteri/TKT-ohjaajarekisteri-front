import React from 'react'
import { shallow } from 'enzyme'
import Course from '../components/course/Course'


describe.only('<Course />', () => {
  it('renders course details', () => {
    const course = {
      course_id: 'TKT 202020',
      course_name: 'OHTU',
      course_year: 2019,
      course_period: 2
    }

    const courseComponent = shallow(<Course course={course} />)
    
    const course_idDiv = courseComponent.find('.course_id')
    const nameDiv = courseComponent.find('.name')

    console.log(nameDiv)

    expect(course_idDiv.text()).toContain(course.course_id)
    expect(nameDiv.text()).toContain(course.course_name)


  })


})