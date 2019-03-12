import React from 'react'

const TogglableButton = ({ children, name, type, onClick, filterValue }) => {
  const selected = {
    backgroundColor: '#aed6f1'
  }
  const deSelected = {
    backgroundColor: '#fff'
  }
  let style = name === filterValue ? selected : deSelected
  return (
    <button
      style={style}
      type={type}
      name={name}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default TogglableButton