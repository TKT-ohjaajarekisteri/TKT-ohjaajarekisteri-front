import React from 'react'
import { mount } from 'enzyme'
import { SingleCourse } from '../components/course/SingleCourse'

describe('<Course />', () => {
    let singleCourse
    beforeAll(() => {
        let props = {
            studs: [
                {
                    student_nro: 1,
                    first_name: 'Xerkko',
                    last_name: 'Opiskelija',
                    nickname: 'Xerkkis',
                    phone: '+35844556677',
                    email: 'arttis@ottis.fi'
                  },
                  {
                    student_nro: 2,
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

        singleCourse = mount(<SingleCourse { ...props } />)
    })

    afterAll(() => {
        singleCourse.unMount()
    })

    it('renders self', () => {
        let table = singleCourse.find('.courseHeader')
        expect(table.length).toBe(1)
        expect(singleCourse.find('.studentDiv').length).toBe(2)
    })


})