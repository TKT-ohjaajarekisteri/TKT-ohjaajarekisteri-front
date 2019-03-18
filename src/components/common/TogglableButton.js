import React from 'react'
import { Button } from 'react-bootstrap'

const TogglableButton = ({ children, name, type, onClick, filterValue }) => {
  let active = name.toString() === filterValue
  return (
    <Button
      className="toggleButton"
      active={active}
      type={type}
      name={name}
      onClick={onClick}
      variant="outline-secondary"
    >
      {children}
    </Button>
  )
}

export default TogglableButton