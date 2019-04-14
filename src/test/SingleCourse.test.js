import React from 'react'
import { mount } from 'enzyme'
import { SingleCourse } from '../components/admin/SingleCourse'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<SingleCourse />', () => {
  let wrapper, props
  beforeAll(() => {
    props = {
      course: {
        course_id: 1,
        learningopportunity_id: 'TKT202020',
        name: 'OHTU',
        year: 2019,
        period: 2,
        checked: false
      },
      initializeSingleCourse: jest.fn(),
      courseId: 1,
      email: {
        to: 'test@helsinki.fi;tkt@helsinki.fi;bee@helsinki.fi;',
        subject: 'Subject template',
        body: 'Body template'
      },
      setStudentAccepted: jest.fn(),
      setEmail: jest.fn(),
      sendAcceptedModified: jest.fn(),
      applicants: [
        {
          student_id: 1,
          student_number: '012345678',
          first_names: 'Timo *Teppo Tellervo',
          last_name: 'Testaaja',
          no_english: false,
          experience: null,
          phone: '1234',
          email: 'test@helsinki.fi',
          accepted: false,
          groups: 0,
          accepted_checked: false,
          email_to_checked: false,
          groups_textbox: 0
        }, {
          student_id: 2,
          student_number: '012345675',
          first_names: 'Pimo *Peppo Pellervo',
          last_name: 'Pestaaja',
          no_english: false,
          experience: null,
          phone: '1234',
          email: 'tkt@helsinki.fi',
          accepted: false,
          groups: 0,
          accepted_checked: false,
          email_to_checked: false,
          groups_textbox: 0
        }, {
          student_id: 3,
          student_number: '012345679',
          first_names: 'Hello *Helo',
          last_name: 'World',
          no_english: false,
          experience: null,
          phone: '1234',
          email: 'bee@helsinki.fi',
          accepted: true,
          groups: 2,
          accepted_checked: true,
          email_to_checked: false,
          groups_textbox: 2
        }
      ]
    }
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders self', () => {
    wrapper = mount( <Router><SingleCourse {...props} /></Router>)
    let table = wrapper.find('.courseHeader')
    expect(table.length).toBe(1)
    expect(wrapper.find('.Student').length).toBe(3)
  })

  it('When saveButton clicked does not send modified if none have been modified', () => {
    wrapper = mount(<Router><SingleCourse {...props} /></Router>)

    expect(props.sendAcceptedModified).toHaveBeenCalledTimes(0)

    const saveButton = wrapper.find('#saveApplied').first()
    expect(saveButton.length).toBe(1)
    saveButton.simulate('click')
    expect(props.sendAcceptedModified).toHaveBeenCalledTimes(0)
  })

  describe('Accepted', () => {
    it('Checkbox already checked for accepted applicants', () => {
      wrapper = mount(<Router><SingleCourse {...props} /></Router>)

      const checkbox = wrapper.find('input[type="checkbox"]').filterWhere((item) => {
        return item.prop('name') === '012345679'
      })
      expect(checkbox.get(1).props.checked).toBe(true)
    })
  })

  describe('Groups', () => {
    it('Number of groups shown for applicants', () => {
      wrapper = mount(<Router><SingleCourse {...props} /></Router>)

      const textfield = wrapper.find('input[type="number"]').filterWhere((item) => {
        return item.prop('id') === '012345679'
      })
      expect(textfield.prop('defaultValue')).toEqual(2)
    })
  })

})