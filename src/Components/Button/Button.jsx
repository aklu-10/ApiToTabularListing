import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import './Button.css';
import Form from '../Form/Form';
import { postResource } from '../../api';

const Button = ({formData}) => {

  const [showAddForm, setShowAddForm] = useState(false);
  const [formContext, setFormContext] = useState({...formData });

  function handleSubmit(e)
  {
    e.preventDefault();
    postResource('https://dummyjson.com','/users/add',formContext)
    .then(console.log)
    setShowAddForm(false)
  }

	function emptyData(obj)
	{
		let resultObj= {}    
		function emptyNestedData(obj)
		{
			Object.keys(obj).map(element=>
			{
				if(typeof obj[element] === 'object')
					emptyNestedData(obj[element])
				else
					obj[element]=''; 
			})
			resultObj = obj;
		}
		emptyNestedData(obj)
		return resultObj;
	}

  useEffect(()=>
  {
    if(formData)
    {
      setFormContext(emptyData(formData))
    }
  },[])


  return (
    <>
        
       <button className='addBtn' onClickCapture={()=>setShowAddForm(true)}> <AddIcon style={{paddingBottom:'8px'}}/> </button>
        {
            showAddForm ? <Form handleSubmit={handleSubmit} formContext={formContext} setFormContext={setFormContext}/>: null
        }
    </>

  )
}

export default Button