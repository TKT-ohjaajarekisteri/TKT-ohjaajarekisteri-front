import React from 'react'
import { LoginForm } from '../components/LoginForm'
import { mount } from 'enzyme'


describe('<LoginForm />', () => {
  let loginComponent

  loginComponent = mount(<LoginForm />)
  //console.log(loginComponent.debug())

  it('renders loginForm', () => {
    expect(loginComponent.find('.studentForm').length).toBe(1)

    let nameDiv = loginComponent.find('.studentForm')
    expect(nameDiv.text()).toContain('username')
    expect(nameDiv.text()).toContain('password')
  })
})
