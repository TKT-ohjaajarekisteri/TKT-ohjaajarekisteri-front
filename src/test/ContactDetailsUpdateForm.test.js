import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { ContactDetailsUpdateForm } from '../components/student/ContactDetailsUpdateForm'
import { Provider } from 'react-redux'
import store from '../reducers/store'
import 'jest-dom/extend-expect'
import { render } from 'react-testing-library'

describe('ContactDetailsUpdateForm', () => {
  let wrapper, props
  beforeEach(() => {
    props = {
      updateEmail: jest.fn(),
      updatePhone: jest.fn(),
      updateExperience: jest.fn(),
      updateLoggedUser: jest.fn(),
      getContactInformation: jest.fn(),
      notify: jest.fn(),
      experience: 'Ten years of testing',
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
        experience: 'Ten years of testing',
        no_english: false
      }
    }
  })

  // afterEach(() => {
  //   wrapper.unmount()
  // })

  it('renders self', () => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <ContactDetailsUpdateForm {...props} />
        </Router>
      </Provider>
    )
    const form = wrapper.find('.contactDetailsUpdateForm')
    expect(form.length).toBe(1)
    wrapper.unmount()
  })

  describe('useEffect', () => {
    it('calls getContactInformation ', () => {
      wrapper = mount(
        <Provider store={store}>
          <Router>
            <ContactDetailsUpdateForm {...props} />
          </Router>
        </Provider>
      )

      setTimeout(() => {
        expect(props.getContactInformation).toHaveBeenCalledTimes(1)
      }, 50)
      wrapper.unmount()
    })

    it('renders defaultInput', () => {

      const component = render(
        <Provider store={store}>
          <Router>
            <ContactDetailsUpdateForm {...props} />
          </Router>
        </Provider>
      )

      expect(component.container).toHaveTextContent(
        'Tiina Testaaja 0000000'
      )
    })

  })

})