import React from 'react'

const LastEx = () => {
    
    const livres=[
        { id :10, titre : 'POO', auteur :'RAMI', prix :300},
        { id :11, titre : 'JS ES6', auteur :'FAMI', prix :230},
        { id :12, titre : 'Algorithme', auteur :'KARIMI', prix :330},
        { id :13, titre : 'HTMH& CSS', auteur :'RAMI', prix :340}
    ];

    const titres = livres.map(livre => livre.titre);
    console.log(titres);
    
    const titres_2 = livres.filter(livre => livre.auteur === 'RAMI');
    console.log(titres_2);
    
    const id_12 = livres.filter(livre => livre.id === 12);
    console.log(id_12)

    const total = livres.reduce((total,livre) => {return total+=livre.prix},0);
    console.log(total);
    
    const mesLivres = [...livres];
    console.log(mesLivres);
    
    
  return (
    <div>
      
    </div>
  )
}

export default LastEx
