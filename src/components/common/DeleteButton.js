import React from 'react'
import { Button } from 'react-bootstrap'

const DeleteButton = ({ id, onClick }) => {
  return (
    <Button className="buttonDelete" onClick={onClick(id)} variant="outline-secondary" type="submit" >
      Delete
    </Button>
  )
}

export default DeleteButton