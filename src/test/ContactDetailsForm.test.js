import React from 'react'
import { shallow, mount } from 'enzyme'
import { ContactDetailsForm } from '../components/student/ContactDetailsForm'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<ContactDetailsForm />', () => {
  let detailsComponent, props, wrapper

  beforeEach(() => {
    props = {
      createStudent: jest.fn(),
      notify: jest.fn(),
      updateLoggedUser: jest.fn(),
      id: 1,
      handleSubmit: jest.fn()
    }

  })

  it('renders self', () => {

    wrapper = mount(
      <Router>
        <ContactDetailsForm {...props}  />
      </Router>
    )

    const form = wrapper.find('.studentForm')
    expect(form.length).toBe(1)
    wrapper.unmount()

  })

  it('button pressed but empty fields', () => {
    wrapper = mount(
      <Router>
        <ContactDetailsForm {...props}  />
      </Router>
    )

    const button = wrapper.find('button').first()

    setTimeout(() => {
      expect(button.length).toBe(1)
      button.simulate('click')
      expect(props.updateLoggedUser).toHaveBeenCalledTimes(0)
      expect(props.notify).toHaveBeenCalledTimes(1)
    }, 50)

    wrapper.unmount()

  })

  it('button pressed, fields are filled', () => {
    wrapper = mount(
      <Router>
        <ContactDetailsForm {...props}  />
      </Router>
    )

    const input = wrapper.find('input[name="email"]')
    const phone = wrapper.find('input[name="phone"]')
    const experience = wrapper.find('input[name="experience"]')
    const button = wrapper.find('button')

    setTimeout(() => {
      input.simulate('change', { target: { value: 'testi@helsinki.fi' } })
      phone.simulate('change', { target: { value: '040 000' } })
      experience.simulate('change', { target: { value: 'no experience' } })
      button.simulate('submit')
      expect(props.updateLoggedUser).toHaveBeenCalledTimes(1)
    }, 50)

  })

  detailsComponent = shallow(<ContactDetailsForm />)
  //console.log(detailsComponent.debug())

  it('renders ContactDetailsForm', () => {
    let detailsDiv = detailsComponent.find('.studentForm')
    expect(detailsDiv.text()).toContain('Contact details')
    expect(detailsDiv.text()).toContain('Phone')
    expect(detailsDiv.text()).toContain('Email')
  })

})
