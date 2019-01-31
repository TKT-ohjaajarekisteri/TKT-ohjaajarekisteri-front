import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import CourseList from '../components/course/CourseList'
import store from '../store.js'

describe('<CourseList />', () => {
    let courseList
    let course
    beforeAll(() => {
        courseList = mount(<Provider store={store}><CourseList /></Provider>)
        course = {
            course_id: 'TKT 202020',
            course_name: 'OHTU',
            course_year: 2019,
            course_period: 2
          }
    })

    afterAll(() => {
        courseList.unMount()
    })

    it('renders self', () => {
        expect(courseList.find('.courseListBody').length).toBe(1)
    })
})