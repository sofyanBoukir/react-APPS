import React from 'react'

const Voiture = () => {
    const myVoiture = {matricule:'19873X9', marque:'Toyota', chevaux:8};
    return(
    <div>
        <h1 style={{color:'green'}}>Information voiture</h1>
        <h4>voiture matricule:<span>{myVoiture.matricule}</span></h4>
        <h5>marque:{myVoiture.marque} nombre de chevaux:{myVoiture.chevaux}</h5>
    </div>
    )
}

export default Voiture
