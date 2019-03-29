import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { ContactDetailsUpdateForm } from '../components/student/ContactDetailsUpdateForm'
import { Provider } from 'react-redux'
import store from '../reducers/store'

describe('CourseDetailsUpdateForm', () => {
  let wrapper, props
  beforeEach(() => {
    props = {
      updateLoggedUser: jest.fn(),
      getContactInformation: jest.fn(),
      notify: jest.fn(),
      id: 1,
      defaultInput: {
        first_names: 'Tiina',
        last_name: 'Testaaja',
        student_number: '00000000'
      },
      loggedUser: {
        user: {
          user_id: 1,
          token: '...'
        },
        phone: '050 00000',
        email: 'testitiina@helsinki.fi',
        experience: 'Testing is my passion',
        no_english: false
      }
    }
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders self', () => {
    wrapper = mount(
      <Provider store={ store }>
        <Router>
          <ContactDetailsUpdateForm {...props} />
        </Router>
      </Provider>
    )
    const form = wrapper.find('.contactDetailsUpdateForm')
    expect(form.length).toBe(1)
  })

  describe('useEffect', () => {
    it('calls getContactInformation ', () => {
      wrapper = mount(
        <Provider store={ store }>
          <Router>
            <ContactDetailsUpdateForm {...props} />
          </Router>
        </Provider>
      )
      setTimeout(() => {
        expect(props.getContactInformation).toHaveBeenCalledTimes(1)
      }, 50)
    })

    it('renders defaultInfo', () => {
      wrapper = mount(
        <Provider store={ store }>
          <Router>
            <ContactDetailsUpdateForm {...props} />
          </Router>
        </Provider>
      )
      const namesAndStudentNro = wrapper.find('h5').first()
      setTimeout(() => {
        expect(namesAndStudentNro).to.contain('Tiina')
        expect(namesAndStudentNro).to.contain('Testaaja')
        expect(namesAndStudentNro).to.contain('00000000')
      }, 50)
    })

    it('button is clicked', () => {
      wrapper = mount(
        <Provider store={ store }>
          <Router>
            <ContactDetailsUpdateForm {...props} />
          </Router>
        </Provider>
      )
      const button  = wrapper.find('.button')

      setTimeout(() => {
        expect(button.length).toBe(1)
        button.simulate('click')
        expect(props.updateLoggedUser).toHaveBeenCalledTimes(1)
        // expect(namesAndStudentNro).to.contain('Testaaja')
        // expect(namesAndStudentNro).to.contain('00000000')
      }, 50)
    })


  })


  // const applyButton = wrapper.find('.buttonApply').first()
  // expect(applyButton.length).toBe(1)
  // applyButton.simulate('click')
  // expect(props.sendApplication).toHaveBeenCalledTimes(0)

  //Todo: test send button

})
