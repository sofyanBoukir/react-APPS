import React, { Component } from 'react'

export default class Exclass extends Component {
  render() {
    const personnes = this.props.personnes;

    console.log(this);
    
    const arrayNomMembre = personnes.filter(personne => personne.estMember == true)
    console.log(arrayNomMembre);
    

    const arrayAges = personnes.filter(personne => personne.age > 24);
    console.log(arrayAges);
    
    const arrayTrue = personnes.filter(personne => personne.age > 24 && personne.estMember == true);
    console.log(arrayTrue);
    
    return (
        <div>
        <h1>Ex2 -1</h1>
        <ul>
          {
            arrayNomMembre.map(elem =>{
              return <li>{elem.nom}</li>
            })
          }
        </ul>      
        <h1>Ex2 -2</h1>
        <ul>
          {
            arrayAges.map(elem =>{
              return <li>{elem.nom}</li>
            })
          } 
        </ul>
        <h1>Ex2 -3</h1>
        <ul>
          {
            arrayTrue.map(elem =>{
              return <li>{elem.nom}</li>
            })
          } 
        </ul>
        
      </div>
    )
  }
}
