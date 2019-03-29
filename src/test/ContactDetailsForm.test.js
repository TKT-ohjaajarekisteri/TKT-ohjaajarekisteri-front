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
    button.simulate('submit')
    expect(props.updateLoggedUser).toHaveBeenCalledTimes(0)
    expect(button.length).toBe(1)
    //expect(props.handleSubmit).toHaveBeenCalledTimes(1)
    //expect(props.notify).toHaveBeenCalledTimes(1)
    //console.log(wrapper.debug())
    wrapper.unmount()

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
