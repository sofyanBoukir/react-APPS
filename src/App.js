import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const App = () => {  

  const [formData,setFormData] = useState({
    nom:"---",
    prenom:"---",
    age:0 
  })

  useEffect(() =>{
    document.title = formData.nom +" "+ formData.prenom;
  },[formData])

  const hanldeChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <label>Nom</label>
      <input type='text'
      name='nom'
      value={formData.nom}
      onChange={hanldeChange} />

      <label>Prenom</label>
      <input type='text'
      name='prenom'
      value={formData.prenom}
      onChange={hanldeChange} />

      <label>Age</label>
      <input type='text'
      name='age'
      value={formData.age}
      onChange={hanldeChange} />

      <h2>Salutation</h2>
      <p>Salut {formData.nom} {formData.prenom} votre age est {formData.age}</p>
    </div>
  )
}
