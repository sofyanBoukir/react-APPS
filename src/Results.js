import React from 'react'

export const Results = ({result}) => {
  return (
    <div>
        <h3>Results</h3>
        <ul>
            {
                result ?
                result.map((item) =>{
                    return <li>{item.nom}</li>
                }):null
            }
        </ul>
    </div>
  )
}
