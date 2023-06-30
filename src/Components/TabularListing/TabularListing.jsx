import React from 'react'
import SubTable from '../SubTable/SubTable';
import Edit from '../Edit/Edit';
import Delete from '../Delete/Delete';
import './TabularListing.css';

const TabularListing = ({tableData}) => {

  function generateColumns(obj)
  {
    return Object.keys(obj).map(keyName=>
      {
        if(typeof obj[keyName] === 'object')
          return <SubTable subObj = {obj[keyName]} keyName={keyName} />
        else
          return <th>{keyName}</th>
      })
  }

  function generateColumnsData(obj)
  {
      return Object.values(obj).map(value=>
        {
          if(typeof value === 'object')
          {
            return generateColumnsData(value)
          }
          else
          {
            return  typeof value === 'string' && value.match(/(jpg|png|jpeg|webp)$/) ? <td><img src={value} width={80}/></td> : <td>{value}</td>
          }
        })
  }

  return (
    <div className='tableContainer'>

      {
        tableData.length!=0  
        ?
        <table className='table tablehover'>

            <thead style={{display:'flex'}}>
              {
                Array.isArray(tableData) &&
                generateColumns(tableData[0])
              }
              <th colSpan={2}>Action</th>
            </thead>

            <tbody>
              {
                Array.isArray(tableData) &&
                tableData.length!=0 ?
                tableData.map(element=>
                  {
                    return <tr>
                      {generateColumnsData(element)}
                      <td><Edit editId = {element.id}/></td>
                      <td><Delete delId = {element.id}/></td>
                    </tr>
                  })
                
                : null
              }
             
            </tbody>

        </table>

        : <p>No Data</p>
      }


    </div>
  )
}

export default TabularListing