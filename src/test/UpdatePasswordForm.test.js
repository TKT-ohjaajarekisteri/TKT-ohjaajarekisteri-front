import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { UpdatePasswordForm } from '../components/admin/UpdatePasswordForm'
import { Provider } from 'react-redux'
import store from '../reducers/store'
import 'jest-dom/extend-expect'

describe('UpdatePasswordForm', () => {
  let wrapper

  afterEach(() => {
    // wrapper.unmount()
  })

  it('renders self', () => {
    wrapper = mount(
      <Provider store={ store }>
        <Router>
          <UpdatePasswordForm />
        </Router>
      </Provider>
    )
    const form = wrapper.find('.updatePasswordForm')
    expect(form.length).toBe(1)
    wrapper.unmount()
  })
})