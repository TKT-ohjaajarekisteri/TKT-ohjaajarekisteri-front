import React from 'react'
import { Button } from 'react-bootstrap'

const DeleteButton = ({ id, onClick }) => {
  return (
    <Button className="buttonDelete" onClick={onClick(id)} variant="dark" type="submit" >
    delete
    </Button>
  )
}

export default DeleteButton