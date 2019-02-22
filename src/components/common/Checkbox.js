import React from 'react'

const Checkbox = ({ type = 'checkbox', name, id, checked = false, onChange, disabled=false }) => {
  return (
    <input
      type={type}
      name={name}
      checked={checked}
      onChange={onChange(id)}
      disabled = {disabled}
    />
  )
}

export default Checkbox
