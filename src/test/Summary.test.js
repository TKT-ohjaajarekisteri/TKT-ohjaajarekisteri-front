import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { Summary } from '../components/admin/Summary'

describe('<Summary />', () => {
  let wrapper, props
  beforeAll(() => {
    props = {
      initializeSummary: jest.fn(),
      setYearFrom: jest.fn(),
      filter: {
        studyProgramme: '',
        period: '',
        courseName: '',
        yearFrom: '',
        yearTo: ''
      },
      summaryList: [{
        course_id: 20,
        course_name: 'Randomized Algorithms I',
        createdAt: '2019-03-28T15:50:42.184Z',
        learningopportunity_id: 'CSM12104',
        periods: [4],
        students: [{
          Application: {
            accepted: false,
            course_id: 20,
            createdAt: '2019-04-05T03:46:28.197Z',
            groups: 0,
            student_id: 2,
            updatedAt: '2019-04-05T03:46:28.197Z'
          },

          createdAt: '2019-04-04T12:55:13.956Z',
          email: 'poju@gmail.com',
          experience: 'ded',
          first_names: 'Timo *Teppo Tellervo',
          last_name: 'Testaaja',
          no_english: true,
          phone: '040122333',
          student_id: 2,
          student_number: '012345678',
          updatedAt: '2019-04-05T04:28:17.393Z'
        }],
        updatedAt: '2019-03-28T15:50:42.184Z',
        year: 2019
      }]
    }
  })

  it('renders summaryCourseList', () => {
    wrapper = mount(
      <Router>
        <Summary {...props} />
      </Router>
    )

    expect(wrapper.find('.courseName').text()).toContain('Randomized Algorithms I')
  })

  it('renders summaryStudentList', () => {
    wrapper = mount(
      <Router>
        <Summary {...props} />
      </Router>
    )

    expect(wrapper.find('.studentName').text()).toContain('Timo *Teppo Tellervo')
  })


  describe('useEffect', () => {
    it('calls initializeSummary', () => {
      wrapper = mount(
        <Router>
          <Summary {...props} />
        </Router>
      )
      setTimeout(() => {
        expect(props.initializeSummary).toHaveBeenCalledTimes(1)
      }, 50)
    })
  })


})

