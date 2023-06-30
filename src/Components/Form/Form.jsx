import React from 'react'
import './Form.css'

const Form = ({handleSubmit, formContext, setFormContext}) => {

  function handleInputs(data, keyName) {
    return Object.keys(data).map(item => {
      if (typeof data[item] === 'object') {
        return Object.keys(data[item]).map(elem => {
          if (typeof data[item][elem] === 'object') {
            return Object.keys(data[item][elem]).map(vals => {
              return <div><h5>{elem}</h5><label>{vals}</label><input type='text' className='form-control border' value={formContext[keyName][item][elem][vals]} onChange={(e) => setFormContext({ ...formContext, [keyName]: { ...data, [item]: { ...data[item], [elem]: { ...data[item][elem], [vals]: e.target.value } } } })} /></div>
            })
          }
          else {
            return <div><label>{elem}</label><input type='text' className='form-control' value={formContext[keyName][item][elem]} name={item} onChange={(e) => setFormContext({ ...formContext, [keyName]: { ...data, [item]: { ...data[item], [elem]: e.target.value } } })} /></div>
          }
        })
      }
      else {
        return <div><label>{item}</label><input type='text' className='form-control' value={formContext[keyName][item]} name={item} onChange={(e) => setFormContext({ ...formContext, [keyName]: { ...data, [item]: e.target.value } })} /></div>
      }
    })
  }
  
 
return (
  
  
    <form onSubmit={handleSubmit} className='formContainer'>
      {
        Object.keys(formContext).map(element => {
          if (typeof formContext[element] === 'object')
            return <><h5>{element}</h5>{handleInputs(formContext[element], element)}</>
          else
            return <div class="mb-3">
              <label for={element.id} class="form-label">{element}</label>
              <input type="text" value={formContext[element]} onChange={(e)=>setFormContext({...formContext, [element] : e.target.value})} class="form-control" id={element.id} />
            </div>
        })
      }
      <button type='submit' className='btn btn-primary'>Update</button>
    </form>
  )
}

export default Form