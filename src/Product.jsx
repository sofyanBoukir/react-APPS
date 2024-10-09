import React from 'react'
import "./styles.css";

const Product = ({product}) => {
    
    const description = product.description;
    const title = product.title;
    let title_modified = title.slice(0,10)+ "...";
    let description_modidied = description.slice(0,30)+"...";
    
  return (
    <div className='product'>
        <img src={product.image}/>
        <h3>{title_modified}</h3>
        <span>{description_modidied}</span>
        <br></br>
        <span className='rate'>{product.rating.rate}</span><br></br>
        <div className='price-add'>
            <span className='price'>{product.price}$</span>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Product
