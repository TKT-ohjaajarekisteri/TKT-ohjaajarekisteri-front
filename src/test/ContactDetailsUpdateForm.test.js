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
        phone: '+358 000 555',
        email: 'example@mail.com',
        experience: 'no experience',
        no_english: false
      },
      loggedUser: {
        user: {
          user_id: 1,
          token: '...'
        }
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
  })

  //Todo: test send button

})
