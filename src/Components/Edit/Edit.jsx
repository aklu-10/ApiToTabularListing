import React, {useState} from 'react'
import { getResource, UpdateResource } from '../../api';
import Form from '../Form/Form';

const Edit = ({editId}) => {

    const [formContext, setFormContext] = useState({});

    function handleEdit()
    {
        getResource('https://dummyjson.com/users/',editId)
        .then(res=>setFormContext(res))
        .catch(console.log)
    }

    function handleSubmit(e)
    {
      e.preventDefault();
      UpdateResource('https://dummyjson.com','/users/'+editId)
      .then(console.log)
      setFormContext({});
    }
  

  return (

    <>
    {
        Object.keys(formContext).length!=0 
        ?  <Form handleSubmit={handleSubmit} formContext={formContext} setFormContext={setFormContext}/>
        : null
    }

    <button onClick={handleEdit} style={{padding:'0 10px'}}>Edit</button>
    </>

  )
}

export default Edit