import React, { useEffect, useState } from 'react'
import "./styles.css"
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SingleProduct = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const [loading,setLoading] = useState(false);
    const [productRating,setProductRating] = useState({rate:""});

    const fetchData = () =>{
        setLoading(true)
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((resposne) =>{
            setProduct(resposne.data)
            setLoading(false)
            setProductRating({rate:resposne.data.rating.rate})
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    useEffect(() =>{
        fetchData()
    },[])
    
    
  return (
    <div className='single-product'>
        {
            loading ? <h1>Loading! Please wait...</h1>:null
        }
        {
            product?
                <>
                    <img src={product.image} />
                    <div className='details'>
                        <h1>{product.title}</h1>
                        <h3>{product.category}</h3>
                        <p>{product.description}</p>
                        <h2>Rate {productRating.rate}/5</h2>
                        <h2 className='product-price'>{product.price}$</h2>
                        <button>Add to cart</button>
                    </div>
                </>
        :<h1>No product with this id</h1>
        }
    </div>
  )
}

export default SingleProduct
