import React from 'react'

const DeleteButton = ({ id, onClick }) => {
  return (
    <button
      onClick={onClick(id)}
    >delete</button>
  )
}

export default DeleteButton