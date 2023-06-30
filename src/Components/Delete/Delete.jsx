import React from 'react'
import { deleteResource } from '../../api'

const Delete = ({delId}) => {

  function handleDelete()
  {
    deleteResource('https://dummyjson.com','/users/'+delId)
    .then(console.log)
  }

  return (
    <button onClick={handleDelete} style={{padding:'0 10px'}}>Delete</button>
  )
}

export default Delete