import React from 'react'

const SubTable = ({subObj, keyName}) => {

  return (

    <table>
        <thead>
            <tr>
                <th>{keyName}</th> 
            </tr>
            <tr>
            {   <>

                {  
                    Object.keys(subObj).map(keyName=>
                    {
                        if(typeof subObj[keyName] === 'object')
                        {
                            return <SubTable subObj={subObj[keyName]} keyName={keyName}/>
                        }   
                        else
                        {
                            return <th>{keyName}</th>
                        }                
                    })
                }
                </>
            }
            </tr>
        </thead>
    </table>

  )
}

export default SubTable