import React, { useState } from 'react'
import "./styles.css"

export const Panier = () => {

    const [formData,setFormData] = useState({
        produit:"",
        marque:"",
        prix:"",
        quantite:"",
    })

    const [error,setError] = useState("");

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const [produits,setProduits] = useState([
        {
            produit:'Legumes',
            marque:'Tomate',
            prix:6,
            quantite:3,
            total:0,
        },
        {
            produit:'Legumes',
            marque:'Tomate2',
            prix:6,
            quantite:3,
            total:0,
        },
        {
            produit:'Legumes',
            marque:'Tomate3',
            prix:6,
            quantite:3,
            total:0,
        },
    ]);

    const handleDelete = (indexToDelete) =>{
        let newProduits = produits.filter((produit,i) => i !== indexToDelete);
        setProduits(newProduits)        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(formData.produit !== '' && formData.marque !== '' &&
            formData.prix !== '' && formData.quantite !== ''
        ){
            setProduits(arrayCopy => [...arrayCopy,formData] );
        }else{
            setError("Inputs is required")
        }
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td>Produit</td>
                    <td>
                        <select name='produit' value={formData.produit} onChange={handleChange}>
                            <option value={"Fruit"}>Fruit</option>
                            <option value={"Legume"}>Legume</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Marque</td>
                    <td>
                        <input type='text' 
                        name='marque' 
                        value={formData.marque} 
                        onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Prix</td>
                    <td>
                        <input type='number' 
                        name='prix' 
                        value={formData.prix} 
                        onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Quantite</td>
                    <td>
                        <input type='number' 
                        name='quantite' 
                        value={formData.quantite} 
                        onChange={handleChange}/>
                    </td>
                </tr>
            </table>
            <br></br>
            <input type='submit' value={"Ajouter"}/>
            {
                error && <p style={{color:"red",textAlign:"center"}}>{error}</p>
            }
        </form>
        <br></br>
        <div className='pan'>
            <h1>Panier</h1>
            <table>
                <tr>
                    <th>Num</th>
                    <th>Produit</th>
                    <th>Marque</th>
                    <th>Prix</th>
                    <th>Quantite</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                {
                    produits && 
                    produits.map((produit,index) =>{
                        return <tr>
                            <td key={index}>{index+1}</td>
                            <td>{produit.produit}</td>
                            <td>{produit.marque}</td>
                            <td>{produit.prix}</td>
                            <td>{produit.quantite}</td>
                            <td>{produit.prix * produit.quantite}</td>
                            <td><button onClick={() => handleDelete(index)}>Supprimer</button></td>
                        </tr>
                    })
                }
            </table>
        </div>
    </div>
  )
}
