import React, { useState } from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    
    const description = product.description;
    const title = product.title;
    let title_modified = title.slice(0,15)+ "...";
    let description_modidied = description.slice(0,30)+"...";
    
    const [shoppingCard,setShoppingCard] = useState([]);

    const handleAddProduct = (productToAdd) =>{
        setShoppingCard([...shoppingCard,productToAdd])
    }

    console.log(shoppingCard);        

    
  return (
    <div className='product'>
        <img src={product.image}/>
        <Link key={product.id} to={`/product/${product.id}`}>
            <h3>{title_modified}</h3>
        </Link>

        <span>{description_modidied}</span>
        <br></br>
        <span className='rate'>{product.rating.rate}</span><br></br>
        <div className='price-add'>
            <span className='price'>{product.price}$</span>
            <button onClick={() => handleAddProduct(product)}>Add to cart</button>
        </div>
    </div>
  )
}

export default Product
