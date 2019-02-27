import React from 'react'

const Checkbox = ({ type = 'checkbox', id, checked = false, onChange, name }) => {
  return (
    <input
      type={type}
      name={name}
      checked={checked}
      onChange={onChange(id)}
    />
  )
}

export default Checkbox
